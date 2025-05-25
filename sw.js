const CACHE_NAME = 'volume-calculator-v1';
const ASSETS = [
  '/Volume-Calculator/',
  '/Volume-Calculator/index.html',
  '/Volume-Calculator/manifest.json',
  '/Volume-Calculator/icons/icon-192.png',
  '/Volume-Calculator/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
