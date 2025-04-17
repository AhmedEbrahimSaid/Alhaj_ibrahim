self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open("app-cache").then(function (cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/icons/icon-192x192.png",
        "/icons/icon-512x512.png",
        // زوّد هنا أي ملفات CSS أو JS عندك
      ]);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
