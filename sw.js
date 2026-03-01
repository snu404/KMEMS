const CACHE_NAME = "conf-pwa-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.json",
  "./sw.js"
  // PDF까지 오프라인 저장하고 싶으면 여기에 pdf 파일을 추가할 수 있지만,
  // 파일 수가 많으면 용량 이슈가 있으니 보통은 "화면만" 캐시를 추천합니다.
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
