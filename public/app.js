/* ============================================
   MyMemes — Pure Vanilla JS Application
   No frameworks. No build step. Just JS.
   ============================================ */

// ---------- I18N ----------
const LOCALES = [
  { code: 'en', label: 'English', flag: 'EN', dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: 'AR', dir: 'rtl' },
  { code: 'ro', label: 'Română', flag: 'RO', dir: 'ltr' },
];

const I18N = {
  en: {
    siteName: 'MyMemes',
    siteTagline: 'Sound Library',
    searchPlaceholder: 'Search for a sound...',
    soundsCount: 'sounds',
    gifsSite: 'GIFs',
    heroBadge: 'Discover. Play. Share.',
    heroTitle: 'Explore the Sounds',
    heroSubtitle: 'Thousands of sounds across every category — anime, games, memes, movies, music and more.',
    heroSubtitleLine2: 'Listen, share, and enjoy!',
    statSounds: 'Sounds',
    statCategories: 'Categories',
    statPlays: 'Plays',
    categoriesTitle: 'Categories',
    allCategories: 'All',
    soundsInCategory: 'sounds',
    inCategory: 'in',
    sortBy: 'Sort:',
    sortNewest: 'Newest',
    sortPopular: 'Popular',
    sortName: 'Name',
    play: 'Play',
    pause: 'Pause',
    share: 'Share',
    originalLink: 'Original link',
    download: 'Download',
    loadingMore: 'Loading more...',
    allLoaded: 'All sounds loaded',
    noSounds: 'No sounds found',
    noSoundsYet: 'No sounds have been added yet',
    noResultsFor: 'No results found for',
    clearSearch: 'Clear search',
    soundsFrom: 'Sounds from',
    playsCount: 'plays',
    language: 'Language',
    theme: 'Theme',
    darkMode: 'Switch to dark mode',
    lightMode: 'Switch to light mode',
  },
  ar: {
    siteName: 'MyMemes',
    siteTagline: 'مكتبة الأصوات',
    searchPlaceholder: 'ابحث عن صوت...',
    soundsCount: 'صوت',
    gifsSite: 'صور متحركة',
    heroBadge: 'اكتشف. شغّل. شارك.',
    heroTitle: 'اكتشف الأصوات',
    heroSubtitle: 'آلاف الأصوات من مختلف الأقسام — أنمي، ألعاب، ميمز، أفلام، موسيقى والمزيد.',
    heroSubtitleLine2: 'استمع، شارك، واستمتع!',
    statSounds: 'صوت',
    statCategories: 'قسم',
    statPlays: 'تشغيل',
    categoriesTitle: 'الأقسام',
    allCategories: 'الكل',
    soundsInCategory: 'صوت',
    inCategory: 'في',
    sortBy: 'ترتيب:',
    sortNewest: 'أحدث',
    sortPopular: 'الأشهر',
    sortName: 'الاسم',
    play: 'تشغيل',
    pause: 'إيقاف',
    share: 'مشاركة',
    originalLink: 'الرابط الأصلي',
    download: 'تحميل',
    loadingMore: 'جارٍ تحميل المزيد...',
    allLoaded: 'تم تحميل جميع الأصوات',
    noSounds: 'لا توجد أصوات',
    noSoundsYet: 'لم يتم إضافة أصوات بعد',
    noResultsFor: 'لم يتم العثور على نتائج لـ',
    clearSearch: 'مسح البحث',
    soundsFrom: 'الأصوات من',
    playsCount: 'تشغيل',
    language: 'اللغة',
    theme: 'المظهر',
    darkMode: 'التبديل إلى الوضع الداكن',
    lightMode: 'التبديل إلى الوضع الفاتح',
  },
  ro: {
    siteName: 'MyMemes',
    siteTagline: 'Bibliotecă de Sunete',
    searchPlaceholder: 'Caută un sunet...',
    soundsCount: 'sunete',
    gifsSite: 'GIF-uri',
    heroBadge: 'Descoperă. Redă. Distribuie.',
    heroTitle: 'Explorează Sunetele',
    heroSubtitle: 'Mii de sunete în fiecare categorie — anime, jocuri, meme-uri, filme, muzică și altele.',
    heroSubtitleLine2: 'Ascultă, distribuie și bucură-te!',
    statSounds: 'Sunete',
    statCategories: 'Categorii',
    statPlays: 'Redări',
    categoriesTitle: 'Categorii',
    allCategories: 'Toate',
    soundsInCategory: 'sunete',
    inCategory: 'în',
    sortBy: 'Sortează:',
    sortNewest: 'Noi',
    sortPopular: 'Populare',
    sortName: 'Nume',
    play: 'Redă',
    pause: 'Pauză',
    share: 'Distribuie',
    originalLink: 'Link original',
    download: 'Descarcă',
    loadingMore: 'Se încarcă mai multe...',
    allLoaded: 'Toate sunetele au fost încărcate',
    noSounds: 'Nu s-au găsit sunete',
    noSoundsYet: 'Nu au fost adăugate sunete încă',
    noResultsFor: 'Nu s-au găsit rezultate pentru',
    clearSearch: 'Șterge căutarea',
    soundsFrom: 'Sunete de la',
    playsCount: 'redări',
    language: 'Limbă',
    theme: 'Temă',
    darkMode: 'Comută pe modul întunecat',
    lightMode: 'Comută pe modul luminos',
  },
};

const CATEGORY_NAMES = {
  'anime-manga':    { en: 'Anime & Manga',  ar: 'أنمي ومانغا',     ro: 'Anime & Manga' },
  'games':          { en: 'Games',          ar: 'ألعاب',           ro: 'Jocuri' },
  'memes':          { en: 'Memes',          ar: 'ميمز',            ro: 'Meme-uri' },
  'movies':         { en: 'Movies',         ar: 'أفلام',           ro: 'Filme' },
  'music':          { en: 'Music',          ar: 'موسيقى',          ro: 'Muzică' },
  'politics':       { en: 'Politics',       ar: 'سياسة',           ro: 'Politică' },
  'pranks':         { en: 'Pranks',         ar: 'مقالب',           ro: 'Farse' },
  'reactions':      { en: 'Reactions',      ar: 'ردود فعل',        ro: 'Reacții' },
  'sound-effects':  { en: 'Sound Effects',  ar: 'مؤثرات صوتية',    ro: 'Efecte sonore' },
  'sports':         { en: 'Sports',         ar: 'رياضة',           ro: 'Sport' },
  'television':     { en: 'Television',     ar: 'تلفزيون',         ro: 'Televiziune' },
  'tiktok-trends':  { en: 'TikTok Trends',  ar: 'تيك توك',         ro: 'Tendințe TikTok' },
  'viral':          { en: 'Viral',          ar: 'فيروسي',          ro: 'Viral' },
  'whatsapp-audios':{ en: 'WhatsApp Audios',ar: 'واتساب',          ro: 'Audio WhatsApp' },
};

const CATEGORY_ICONS = {
  'anime-manga': '⛩️', 'games': '🎮', 'memes': '😂', 'movies': '🎬',
  'music': '🎵', 'politics': '🏛️', 'pranks': '🤡', 'reactions': '😱',
  'sound-effects': '🔊', 'sports': '⚽', 'television': '📺',
  'tiktok-trends': '📱', 'viral': '🔥', 'whatsapp-audios': '💬',
};

// ---------- STATE ----------
let state = {
  locale: 'en',
  categories: [],
  sounds: [],
  filtered: [],
  selectedCategory: '',
  search: '',
  sort: 'newest',
  page: 1,
  pageSize: 20,
  hasMore: true,
  loadingMore: false,
  initialLoading: true,
  totalPlays: 0,
  downloadingSlug: null,
  // Per-device play increments (persisted in localStorage)
  playsLocal: {},
  // Detected backend platform: { plays: <endpoint>, download: <endpoint> }
  // Resolved at runtime — works on BOTH Netlify and Cloudflare Pages
  platform: null,
};

let audioEl = null;
let currentSlug = null;
let isPlaying = false;

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', init);

async function init() {
  // Restore locale
  const saved = localStorage.getItem('mymemes_locale');
  const browser = (navigator.language || 'en').toLowerCase();
  state.locale = saved || (browser.startsWith('ar') ? 'ar' : browser.startsWith('ro') ? 'ro' : 'en');
  applyLocale();

  // Build language switcher
  buildLangSwitcher();
  initLangSwitcher();

  // Wire up controls
  wireControls();
  initTheme();

  // Load data
  try {
    const [catsRes, soundsRes] = await Promise.all([
      fetch('/data/categories.json'),
      fetch('/data/sounds.json'),
    ]);
    state.categories = await catsRes.json();
    state.sounds = await soundsRes.json();
  } catch (e) {
    console.error('Failed to load data:', e);
  }

  // Apply per-device play increments saved in localStorage
  loadLocalPlays();

  // Total plays across all sounds
  state.totalPlays = state.sounds.reduce((sum, s) => sum + (s.plays || 0), 0);

  // Sync with the global server-side counter (Netlify Blobs / Cloudflare KV) — non-blocking
  syncGlobalPlays();

  // Render categories + stats
  renderCategories();
  renderStats();

  // Initial filter + render
  state.initialLoading = false;
  applyFilter();

  // Observe infinite scroll trigger
  setupInfiniteScroll();
}

// ---------- I18N ----------
function t(key) {
  return (I18N[state.locale] && I18N[state.locale][key]) || I18N.en[key] || key;
}

function applyLocale() {
  const locale = LOCALES.find(l => l.code === state.locale) || LOCALES[0];
  document.documentElement.lang = state.locale;
  document.documentElement.dir = locale.dir;

  // Update [data-i18n] text
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  // Update [data-i18n-ph] placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  // Update current lang label
  const labelEl = document.querySelector('.lang-current-label');
  if (labelEl) labelEl.textContent = locale.label;
}

function buildLangSwitcher() {
  const dropdown = document.getElementById('lang-dropdown');
  // Rebuild dropdown items. Using .onclick (NOT addEventListener) makes this
  // 100% idempotent — re-calling buildLangSwitcher can never stack handlers.
  dropdown.innerHTML = LOCALES.map(l => `
    <button class="lang-item ${l.code === state.locale ? 'active' : ''}" data-lang="${l.code}" type="button">
      <span style="display:inline-flex;align-items:center;">
        <span class="lang-flag">${l.flag}</span>
        <span>${l.label}</span>
      </span>
      ${l.code === state.locale ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
    </button>
  `).join('');

  dropdown.querySelectorAll('.lang-item').forEach(btn => {
    btn.onclick = () => {
      state.locale = btn.dataset.lang;
      localStorage.setItem('mymemes_locale', state.locale);
      applyLocale();
      buildLangSwitcher();
      renderCategories();
      applyFilter();
      closeLangDropdown();
    };
  });
}

function closeLangDropdown() {
  const langBtn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
  if (dropdown) dropdown.hidden = true;
}

// Registered ONCE via .onclick — never stacks, works after unlimited switches.
function initLangSwitcher() {
  const langBtn = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');

  // Toggle dropdown
  langBtn.onclick = (e) => {
    e.stopPropagation();
    if (dropdown.hidden) {
      dropdown.hidden = false;
      langBtn.setAttribute('aria-expanded', 'true');
    } else {
      closeLangDropdown();
    }
  };

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!dropdown.hidden && !e.target.closest('.lang-switcher')) {
      closeLangDropdown();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !dropdown.hidden) closeLangDropdown();
  });
}

// ---------- THEME ----------
// Light is the default. Dark is opt-in via the toggle button.
function initTheme() {
  const btn = document.getElementById('theme-btn');
  if (!btn) return;

  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

  const syncMeta = () => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark() ? '#0d1310' : '#ffffff');
  };

  const syncLabel = () => {
    btn.setAttribute('aria-label', isDark() ? t('lightMode') : t('darkMode'));
    btn.title = isDark() ? t('lightMode') : t('darkMode');
  };

  btn.onclick = () => {
    if (isDark()) {
      document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('mymemes_theme', 'light'); } catch (e) {}
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      try { localStorage.setItem('mymemes_theme', 'dark'); } catch (e) {}
    }
    syncMeta();
    syncLabel();
  };

  syncMeta();
  syncLabel();
}

// ---------- CONTROLS ----------
function wireControls() {
  // Search
  const search = document.getElementById('search');
  const searchMobile = document.getElementById('search-mobile');
  let searchTimer;
  const onSearch = (val) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = val.trim().toLowerCase();
      state.page = 1;
      applyFilter();
    }, 250);
  };
  search.addEventListener('input', e => {
    if (searchMobile) searchMobile.value = e.target.value;
    onSearch(e.target.value);
  });
  if (searchMobile) {
    searchMobile.addEventListener('input', e => {
      search.value = e.target.value;
      onSearch(e.target.value);
    });
  }

  // Sort
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.sort = btn.dataset.sort;
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.toggle('active', b === btn));
      state.page = 1;
      applyFilter();
    });
  });
  document.querySelector('.sort-btn[data-sort="newest"]').classList.add('active');

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileSearch = document.getElementById('mobile-search');
  menuToggle.addEventListener('click', () => {
    mobileSearch.hidden = !mobileSearch.hidden;
  });

  // Clear search button
  document.getElementById('clear-search-btn').addEventListener('click', () => {
    state.search = '';
    search.value = '';
    if (searchMobile) searchMobile.value = '';
    state.page = 1;
    applyFilter();
  });
}

// ---------- FILTER + SORT ----------
function applyFilter() {
  let list = state.sounds.slice();

  // Category filter
  if (state.selectedCategory) {
    list = list.filter(s => s.cat === state.selectedCategory);
  }

  // Search
  if (state.search) {
    const q = state.search;
    list = list.filter(s =>
      (s.name || '').toLowerCase().includes(q) ||
      (s.slug || '').toLowerCase().includes(q) ||
      (s.tags || '').toLowerCase().includes(q)
    );
  }

  // Sort
  if (state.sort === 'popular') {
    list.sort((a, b) => (b.plays || 0) - (a.plays || 0));
  } else if (state.sort === 'name') {
    list.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  } else {
    // newest = original order (sounds.json is already sorted by createdAt DESC)
  }

  state.filtered = list;
  state.hasMore = list.length > state.pageSize;

  // Render first page
  renderSounds(true);
  updateResultsInfo();
}

// ---------- RENDER ----------
function renderCategories() {
  const list = document.getElementById('category-list');
  const total = state.sounds.length;
  const cats = state.categories.map(c => {
    const count = state.sounds.filter(s => s.cat === c.slug).length;
    return { ...c, count };
  }).sort((a, b) => b.count - a.count);

  list.innerHTML = `
    <button class="cat-btn ${!state.selectedCategory ? 'active' : ''}" data-cat="">
      ${t('allCategories')}
    </button>
    ${cats.map(c => `
      <button class="cat-btn ${state.selectedCategory === c.slug ? 'active' : ''}" data-cat="${c.slug}">
        <span>${CATEGORY_ICONS[c.slug] || c.icon || '🎵'}</span>
        <span>${(CATEGORY_NAMES[c.slug] && CATEGORY_NAMES[c.slug][state.locale]) || c.nameAr || c.name}</span>
        <span class="cat-count">${c.count}</span>
      </button>
    `).join('')}
  `;

  list.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCategory = btn.dataset.cat;
      state.page = 1;
      renderCategories();
      applyFilter();
    });
  });
}

function renderStats() {
  document.getElementById('stat-sounds').textContent = state.sounds.length.toLocaleString();
  document.getElementById('stat-categories').textContent = state.categories.length;
  document.getElementById('stat-plays').textContent = state.totalPlays.toLocaleString();
  document.getElementById('header-count').textContent = state.sounds.length.toLocaleString();
  document.getElementById('footer-plays').textContent = state.totalPlays.toLocaleString();
}

function updateResultsInfo() {
  const info = document.getElementById('results-info');
  const total = state.filtered.length;
  let txt = `${total.toLocaleString()} ${t('soundsInCategory')}`;
  if (state.selectedCategory) {
    const cat = state.categories.find(c => c.slug === state.selectedCategory);
    const catName = cat ? ((CATEGORY_NAMES[cat.slug] && CATEGORY_NAMES[cat.slug][state.locale]) || cat.nameAr || cat.name) : state.selectedCategory;
    txt += ` ${t('inCategory')} ${catName}`;
  }
  info.textContent = txt;
}

function renderSounds(reset) {
  const grid = document.getElementById('sounds-grid');
  const skeleton = document.getElementById('loading-skeleton');
  const emptyState = document.getElementById('empty-state');
  const emptyMsg = document.getElementById('empty-msg');
  const clearBtn = document.getElementById('clear-search-btn');
  const loadingMore = document.getElementById('loading-more');
  const allLoaded = document.getElementById('all-loaded');

  if (reset) {
    grid.innerHTML = '';
    if (state.initialLoading) {
      skeleton.hidden = false;
      emptyState.hidden = true;
      loadingMore.hidden = true;
      allLoaded.hidden = true;
      return;
    }
    skeleton.hidden = true;
  }

  if (state.filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.hidden = false;
    emptyMsg.textContent = state.search ? `${t('noResultsFor')} "${state.search}"` : t('noSoundsYet');
    clearBtn.hidden = !state.search;
    loadingMore.hidden = true;
    allLoaded.hidden = true;
    return;
  }

  emptyState.hidden = true;

  const end = state.page * state.pageSize;
  const slice = state.filtered.slice(0, end);

  grid.innerHTML = slice.map(sound => renderCard(sound)).join('');

  // Wire up cards
  grid.querySelectorAll('.sound-card').forEach(card => {
    const slug = card.dataset.slug;
    card.querySelector('.play-btn').addEventListener('click', () => {
      const sound = state.sounds.find(s => s.slug === slug);
      if (sound) handlePlay(sound);
    });
    card.querySelector('.card-share').addEventListener('click', () => {
      const sound = state.sounds.find(s => s.slug === slug);
      if (sound && navigator.share) {
        navigator.share({ title: sound.name, url: sound.source || sound.url });
      }
    });
    card.querySelector('.card-download').addEventListener('click', () => {
      const sound = state.sounds.find(s => s.slug === slug);
      if (sound) handleDownload(sound);
    });
  });

  // Update play state on cards
  updatePlayingCard();

  // Show/hide loading + all-loaded
  if (state.loadingMore) {
    loadingMore.hidden = false;
    allLoaded.hidden = true;
  } else {
    loadingMore.hidden = true;
    if (slice.length >= state.filtered.length && state.filtered.length > 0) {
      allLoaded.hidden = false;
      document.getElementById('loaded-count').textContent = slice.length;
    } else {
      allLoaded.hidden = true;
    }
  }
}

function renderCard(sound) {
  const playing = (currentSlug === sound.slug && isPlaying);
  const cat = state.categories.find(c => c.slug === sound.cat);
  const catName = cat ? ((CATEGORY_NAMES[cat.slug] && CATEGORY_NAMES[cat.slug][state.locale]) || cat.nameAr || cat.name) : '';
  const catIcon = CATEGORY_ICONS[sound.cat] || (cat && cat.icon) || '🎵';
  const tags = sound.tags ? sound.tags.split(',').slice(0, 3).map(tg => `<span class="tag">${escapeHtml(tg.trim())}</span>`).join('') : '';

  return `
    <article class="sound-card ${playing ? 'playing' : ''}" data-slug="${escapeAttr(sound.slug)}">
      <div class="card-header">
        <div style="flex:1;min-width:0;">
          <div class="card-title" title="${escapeAttr(sound.name)}">${escapeHtml(sound.name)}</div>
          <div class="card-cat">${catIcon} ${escapeHtml(catName)}</div>
        </div>
      </div>
      <button class="play-btn ${playing ? 'playing' : ''}">
        ${playing ? `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          <span>${t('pause')}</span>
          <span class="play-wave"><span></span><span></span><span></span><span></span><span></span></span>
        ` : `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>${t('play')}</span>
        `}
      </button>
      <div class="card-footer">
        <div class="card-plays">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
          <span>${sound.plays || 0}</span>
        </div>
        <div class="card-actions">
          <button class="card-action card-share" title="${t('share')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          </button>
          <a class="card-action" href="${escapeAttr(sound.source || sound.url)}" target="_blank" rel="noopener noreferrer" title="${t('originalLink')}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
          <button class="card-action card-download" title="${t('download')}" ${state.downloadingSlug === sound.slug ? 'disabled' : ''}>
            ${state.downloadingSlug === sound.slug
              ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 0.8s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>'
              : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>'}
          </button>
        </div>
      </div>
      ${tags ? `<div class="card-tags">${tags}</div>` : ''}
    </article>
  `;
}

function updatePlayingCard() {
  document.querySelectorAll('.sound-card').forEach(card => {
    const slug = card.dataset.slug;
    const playing = (currentSlug === slug && isPlaying);
    card.classList.toggle('playing', playing);
    const btn = card.querySelector('.play-btn');
    if (btn) {
      btn.classList.toggle('playing', playing);
      const span = btn.querySelector('span:not(.play-wave)');
      const svg = btn.querySelector('svg');
      if (span && svg) {
        if (playing) {
          span.textContent = t('pause');
          svg.outerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
          if (!btn.querySelector('.play-wave')) {
            const wave = document.createElement('span');
            wave.className = 'play-wave';
            wave.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
            btn.appendChild(wave);
          }
        } else {
          span.textContent = t('play');
          svg.outerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
          const wave = btn.querySelector('.play-wave');
          if (wave) wave.remove();
        }
      }
    }
  });
}

// ---------- PLAYS COUNTER ----------
// Backend detection — supports BOTH platforms:
//   Cloudflare Pages: /api/plays (KV)        + /download  (functions/*.js)
//   Netlify:          /.netlify/functions/*  (Blobs)
async function detectPlatform() {
  const candidates = [
    { name: 'cloudflare', plays: '/api/plays', download: '/download' },
    { name: 'netlify', plays: '/.netlify/functions/plays', download: '/.netlify/functions/download' },
  ];
  for (const c of candidates) {
    try {
      const res = await fetch(c.plays, { cache: 'no-store' });
      if (res.ok) return c;
    } catch (e) { /* try next */ }
  }
  return candidates[candidates.length - 1]; // assume Netlify-shaped as fallback
}

function downloadEndpoint() {
  return (state.platform && state.platform.download) || '/.netlify/functions/download';
}

// Effective plays = max(original data, global server count, local device count)
function effectivePlays(sound) {
  const globalCount = (state.globalPlays && state.globalPlays[sound.slug]) || 0;
  const localCount = state.playsLocal[sound.slug] || 0;
  return Math.max(sound.plays || 0, globalCount, localCount);
}

function loadLocalPlays() {
  try {
    state.playsLocal = JSON.parse(localStorage.getItem('mymemes_plays_local') || '{}');
    if (typeof state.playsLocal !== 'object' || !state.playsLocal) state.playsLocal = {};
  } catch (e) { state.playsLocal = {}; }
  // Apply local counts onto sounds for immediate correct display
  state.sounds.forEach(s => {
    const local = state.playsLocal[s.slug] || 0;
    if (local > (s.plays || 0)) s.plays = local;
  });
}

async function syncGlobalPlays() {
  try {
    if (!state.platform) state.platform = await detectPlatform();
    const res = await fetch(state.platform.plays, { cache: 'no-store' });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.counts) return;
    state.globalPlays = data.counts;

    // Merge global counts into sounds (never decrease a number)
    state.sounds.forEach(s => {
      const g = data.counts[s.slug] || 0;
      if (g > (s.plays || 0)) s.plays = g;
    });

    // Recompute totals and refresh visible UI
    state.totalPlays = state.sounds.reduce((sum, s) => sum + (s.plays || 0), 0);
    renderStats();
    refreshVisiblePlayCounts();
  } catch (e) { /* offline / function missing — keep local counts */ }
}

function registerPlay(sound) {
  // 1) increment in memory
  sound.plays = effectivePlays(sound) + 1;
  state.totalPlays += 1;

  // 2) persist per-device
  state.playsLocal[sound.slug] = (state.playsLocal[sound.slug] || 0) + 1;
  try { localStorage.setItem('mymemes_plays_local', JSON.stringify(state.playsLocal)); } catch (e) {}

  // 3) persist globally (fire-and-forget) — on the detected platform
  const postIt = state.platform
    ? Promise.resolve(state.platform)
    : detectPlatform().then(p => (state.platform = p));
  postIt.then(p => fetch(p.plays, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ slug: sound.slug }),
  }).catch(() => {})).catch(() => {});

  // 4) update UI live
  updateCardPlays(sound.slug);
  renderStats();
}

function updateCardPlays(slug) {
  const card = document.querySelector(`.sound-card[data-slug="${CSS.escape(slug)}"]`);
  if (!card) return;
  const sound = state.sounds.find(s => s.slug === slug);
  if (!sound) return;
  const el = card.querySelector('.card-plays span');
  if (el) el.textContent = String(sound.plays || 0);
}

function refreshVisiblePlayCounts() {
  document.querySelectorAll('.sound-card').forEach(card => {
    const sound = state.sounds.find(s => s.slug === card.dataset.slug);
    if (!sound) return;
    const el = card.querySelector('.card-plays span');
    if (el) el.textContent = String(effectivePlays(sound));
  });
}

// ---------- AUDIO PLAYER ----------
// Audio streaming strategy:
//   1) Try the direct myinstants URL (fast — works for most visitors)
//   2) If it fails (hotlink/Cloudflare blocks, dead file...), fall back to our
//      server proxy (inline mode) which always works — Netlify or Cloudflare
// The play is counted ONLY when playback actually starts.
function proxyAudioUrl(sound) {
  return `${downloadEndpoint()}?url=${encodeURIComponent(sound.url)}&name=${encodeURIComponent(sound.name || '')}&inline=1`;
}

function tryPlay(src) {
  audioEl.src = src;
  return audioEl.play(); // resolves when playback actually starts
}

async function handlePlay(sound) {
  if (!audioEl) audioEl = new Audio();
  if (currentSlug === sound.slug && isPlaying) {
    audioEl.pause();
    isPlaying = false;
    updatePlayingCard();
    return;
  }
  audioEl.onended = null;

  const sources = [sound.url, proxyAudioUrl(sound)];
  for (let i = 0; i < sources.length; i++) {
    try {
      await tryPlay(sources[i]);
      currentSlug = sound.slug;
      isPlaying = true;
      updatePlayingCard();
      registerPlay(sound); // counted only when playback really starts
      audioEl.onended = () => {
        isPlaying = false;
        currentSlug = null;
        updatePlayingCard();
      };
      return;
    } catch (err) {
      if (err && err.name === 'AbortError') return; // user interrupted
      console.warn(`Audio source ${i} failed for "${sound.slug}":`, err && err.message);
    }
  }
  console.error('All audio sources failed for', sound.slug);
}

// ---------- DOWNLOAD ----------
// Multi-strategy download:
//   1. Try Netlify Python function (server-side fetch with proper headers, returns attachment)
//   2. Try direct fetch with CORS (works if upstream sends CORS headers — usually fails for myinstants)
//   3. Fallback: <a download> with the raw URL (browser may play instead of download)
//   4. Last resort: open in new tab
async function handleDownload(sound) {
  state.downloadingSlug = sound.slug;
  updateDownloadingState();

  const buildName = () => {
    const safe = (sound.name || 'sound').replace(/[<>:"/\\|?*]/g, '').trim().slice(0, 80) || 'sound';
    const ext = (sound.url.split('.').pop() || 'mp3').split('?')[0];
    return `${safe}.${ext}`;
  };

  const triggerSave = (blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = buildName();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  try {
    // 1) Server function — best UX, proper Content-Disposition: attachment
    const fnUrl = `${downloadEndpoint()}?url=${encodeURIComponent(sound.url)}&name=${encodeURIComponent(sound.name)}`;
    let res = await fetch(fnUrl).catch(() => null);
    if (res && res.ok) {
      const blob = await res.blob();
      if (blob.size > 0) {
        triggerSave(blob);
        return;
      }
    }

    // 2) Direct fetch with CORS (often fails for myinstants.com, but try anyway)
    try {
      const direct = await fetch(sound.url, { mode: 'cors' });
      if (direct.ok) {
        const blob = await direct.blob();
        if (blob.size > 0) {
          triggerSave(blob);
          return;
        }
      }
    } catch {}

    // 3) <a download> fallback — browser will at least try to download
    const a = document.createElement('a');
    a.href = sound.url;
    a.download = buildName();
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (e) {
    console.error('Download error:', e);
    // 4) Last resort: open in new tab
    window.open(sound.url, '_blank');
  } finally {
    setTimeout(() => {
      state.downloadingSlug = null;
      updateDownloadingState();
    }, 500);
  }
}

function updateDownloadingState() {
  document.querySelectorAll('.card-download').forEach(btn => {
    const card = btn.closest('.sound-card');
    if (!card) return;
    const slug = card.dataset.slug;
    const isDownloading = state.downloadingSlug === slug;
    btn.disabled = isDownloading;
    btn.innerHTML = isDownloading
      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 0.8s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>'
      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>';
  });
}

// ---------- INFINITE SCROLL ----------
function setupInfiniteScroll() {
  const trigger = document.getElementById('load-more-trigger');
  const observer = new IntersectionObserver((entries) => {
    const target = entries[0];
    if (target.isIntersecting && state.hasMore && !state.loadingMore && !state.initialLoading) {
      loadMore();
    }
  }, { root: null, rootMargin: '300px', threshold: 0 });

  observer.observe(trigger);
}

function loadMore() {
  if (state.filtered.length === 0) return;
  const currentCount = Math.min(state.page * state.pageSize, state.filtered.length);
  const nextPage = state.page + 1;
  const nextCount = Math.min(nextPage * state.pageSize, state.filtered.length);

  if (nextCount <= currentCount) {
    state.hasMore = false;
    return;
  }

  state.loadingMore = true;
  state.page = nextPage;
  renderSounds(false);

  // Simulate brief loading delay for UX
  setTimeout(() => {
    state.loadingMore = false;
    state.hasMore = nextCount < state.filtered.length;
    renderSounds(false);
  }, 200);
}

// ---------- HELPERS ----------
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  return escapeHtml(str);
}
