# MyMemes 🔊

مكتبة أصوات ضخمة — **17,979 صوتاً** في **14 قسماً** — مبنية بـ HTML/CSS/JS نقي (بدون أي إطار عمل).

🔗 **الموقع المباشر**: https://mymemes.pages.dev (Cloudflare Pages)
🔗 **مرآة Netlify**: https://mymemes-app.netlify.app

## المزايا

- 🎵 **17,979 صوتاً** مقسمة على 14 قسم مع بحث فوري وترتيب حسب الأكثر تشغيلاً
- ▶️ **عداد تشغيل حقيقي**: يزيد عند كل تشغيل فعلي، محفوظ محلياً (localStorage) وعالمياً (Cloudflare KV) لكل الزوار
- 🌗 **وضع فاتح/داكن** مع زر تبديل وحفظ التفضيل
- 🌍 **ثلاث لغات**: العربية (RTL تلقائي) / English / Română
- ⬇️ **تحميل مباشر** عبر دالة سيرفر مع بروكسي يتجاوز حجب المصدر
- 📱 تصميم متجاوب كامل — زمردي، بدون إطارات عمل

## البنية

```
├── public/                 # الملفات الثابتة (جذر الموقع)
│   ├── index.html          # الصفحة الوحيدة (SPA بسيط)
│   ├── style.css           # التصميم الزمردي الكامل (فاتح + داكن)
│   ├── app.js              # كل المنطق: تشغيل، بحث، عدادات، ثيم، لغة
│   └── data/
│       └── sounds.json     # 17,979 صوتاً (slug, name, url, cat, plays, tags)
├── functions/              # Cloudflare Pages Functions
│   ├── api/plays.js        # عداد عالمي دائم عبر Cloudflare KV
│   └── download.js         # بروكسي تحميل/تشغيل بـ fetch أصلي (يتجاوز الحجب)
└── netlify/functions/      # نفس الدوال بصيغة Netlify (Blobs + curl) للمرآة
```

## العداد (plays)

- عند بدء تشغيل الصوت فعلياً يُسجَّل: `+1` في الذاكرة، `+1` في `localStorage` للجهاز، و`POST` للعداد العالمي على المنصة المكتشفة تلقائياً
- العرض = أكبر قيمة بين (المصدر، العداد العالمي، عداد الجهاز) — لا ينقص أبداً
- الدالة الخلفية: Cloudflare KV (أساسي) أو Netlify Blobs (المرآة) — نفس صيغة البيانات تماماً

## النشر

الموقع يعمل على **المنصتين معاً** — `app.js` يكتشف المنصة تلقائياً عند الإقلاع:

| المنصة | عداد التشغيل | التحميل/البديل الصوتي |
|--------|--------------|------------------------|
| **Cloudflare Pages** (أساسي) | `/api/plays` → KV | `/download` → fetch أصلي |
| **Netlify** (مرآة) | `/.netlify/functions/plays` → Blobs | `/.netlify/functions/download` → curl |

### Cloudflare Pages (تلقائي مع GitHub)
عند كل `push` إلى `main` — بعد ربط المستودع بمشروع `mymemes` في لوحة Cloudflare
(أو `npx wrangler pages deploy` يدوياً). الإعدادات في `wrangler.toml`:
- الملفات الثابتة: `public/` — الدوال: `functions/`
- KV namespace: `mymemes-plays` مربوط بالاسم `PLAYS_KV`

### Netlify (مرآة)
نشر تلقائي عبر GitHub Actions (`.github/workflows/deploy-netlify.yml`) عند كل `push` إلى `main`.

يتطلب سرّين في المستودع:
| السر | الوصف |
|------|-------|
| `NETLIFY_AUTH_TOKEN` | توكن Netlify الشخصي |
| `NETLIFY_SITE_ID` | معرف الموقع (8d33…4350) |

## الترخيص

MIT
