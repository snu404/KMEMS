const CACHE_NAME = "conf-pwa-v3"; // <-- 수정할 때마다 v4, v5로 올리세요
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./sw.js"
];

self.addEventListener("install", (event) => {
  self.skipWaiting(); // 새 SW 즉시 적용 준비
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)));
    await self.clients.claim(); // 열린 탭에도 즉시 적용
  })());
});

// 네트워크 우선(최신), 실패 시 캐시
self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith((async () => {
    try {
      const fresh = await fetch(req);
      const cache = await caches.open(CACHE_NAME);
      cache.put(req, fresh.clone());
      return fresh;
    } catch (e) {
      const cached = await caches.match(req);
      return cached || Response.error();
    }
  })());
});
