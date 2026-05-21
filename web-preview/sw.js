const CACHE_NAME = 'echo-v5-portraits-tutorial';
const ASSETS = [
  '/',
  '/index.html',
  '/concepts.js',
  '/stories.js',
  '/stoic-concepts.js',
  '/stoic-stories.js',
  '/camus-concepts.js',
  '/camus-stories.js',
  '/foucault-concepts.js',
  '/foucault-stories.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/fonts/YandexSansDisplay-Thin.woff2',
  '/fonts/YandexSansDisplay-Regular.woff2',
  '/fonts/YandexSansDisplay-RegularItalic.woff2',
  '/fonts/YandexSansDisplay-Bold.woff2',
  '/fonts/YandexSansText-Light.woff2',
  '/fonts/YandexSansText-Regular.woff2',
  '/fonts/YandexSansText-RegularItalic.woff2',
  '/fonts/YandexSansText-Medium.woff2',
  '/fonts/YandexSansText-Bold.woff2',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
