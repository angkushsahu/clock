self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache => {
			return cache.addAll([
				"/",
				"/index.html",
				"/styles/style.css",
				"/scripts/script.js",
				"/scripts/serviceWorker.js",
				"/assets/android-chrome-192x192.png",
				"/assets/android-chrome-512x512.png",
				"/assets/site.webmanifest",
				"/assets/favicon.ico",
			]);
		}),
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response => {
			return response || fetch(e.request);
		}),
	);
});
