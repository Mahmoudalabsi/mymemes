/**
 * Cloudflare Pages Function — proxies audio from myinstants.com.
 * Route: GET /download?url=<upstream>&name=<filename>&inline=1
 *   inline=1  -> stream to the <audio> element (play fallback)
 *   otherwise -> Content-Disposition: attachment (download)
 *
 * Why no curl (unlike the Netlify version)? Workers fetch originates from
 * Cloudflare's own edge network with a clean TLS fingerprint, which
 * myinstants' Cloudflare WAF accepts — so native fetch() works and we can
 * stream the body directly without buffering the whole file.
 */

const ALLOWED_HOSTS = new Set(["myinstants.com", "www.myinstants.com"]);

function safeFilename(name, url) {
  let ext = ".mp3";
  try {
    const u = new URL(url);
    const dot = u.pathname.lastIndexOf(".");
    if (dot > -1) ext = u.pathname.slice(dot);
  } catch {}
  if (name) {
    const cleaned = name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "").trim().slice(0, 80);
    if (cleaned) return cleaned + ext;
  }
  return "sound" + ext;
}

const json = (status, obj) => new Response(JSON.stringify(obj), {
  status,
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
});

export async function onRequest(context) {
  const { request } = context;
  const qs = new URL(request.url).searchParams;
  const url = qs.get("url") || "";
  const name = qs.get("name") || "";
  const inline = qs.get("inline") === "1";

  if (!url) return json(400, { error: "Missing 'url' parameter" });

  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return json(400, { error: "Invalid url" });
  }

  if (!ALLOWED_HOSTS.has(parsed.hostname.toLowerCase())) {
    return json(403, { error: "Host not allowed" });
  }

  const filename = safeFilename(name, url);
  const encodedFilename = encodeURIComponent(filename);

  try {
    const upstream = await fetch(url, {
      redirect: "follow",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        "Accept": "audio/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.myinstants.com/",
      },
      // Let Cloudflare cache the upstream audio at the edge (30 days)
      cf: { cacheTtl: 2592000, cacheEverything: true },
    });

    if (!upstream.ok || !upstream.body) {
      return json(502, { error: `Upstream returned ${upstream.status}` });
    }

    let contentType = upstream.headers.get("Content-Type") || "audio/mpeg";
    if (!contentType.startsWith("audio") && !contentType.includes("octet-stream")) {
      contentType = "audio/mpeg";
    }

    const headers = {
      "Content-Type": contentType,
      // inline=1 -> stream to <audio>; otherwise force a download
      "Content-Disposition": inline
        ? `inline; filename*=UTF-8''${encodedFilename}`
        : `attachment; filename*=UTF-8''${encodedFilename}`,
      // Immutable audio: browser keeps it 30 days, so prefetched/cached files
      // play back INSTANTLY on repeat visits without touching the network.
      "Cache-Control": "public, max-age=2592000, immutable",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "Content-Disposition",
    };
    const len = upstream.headers.get("Content-Length");
    if (len) headers["Content-Length"] = len;

    // Stream the upstream body straight to the client
    return new Response(upstream.body, { status: 200, headers });
  } catch (err) {
    return json(502, { error: `Fetch error: ${(err && err.message) || "unknown"}` });
  }
}
