// This is the "Offline copy of pages" service worker
// Template from PWA Builder (https://www.pwabuilder.com/serviceworker)

// Install stage sets up the index page (home page) in the cache and opens a new cache
self.addEventListener("install", event => {
	const indexPage = new Request("index.html");
	event.waitUntil(
		fetch(indexPage).then(response => {
			return caches.open("cloverleaf").then(cache => {
				console.debug(`[PWA Builder] Cached index page during Install ${response.url}`);
				return cache.put(indexPage, response);
			});
		})
	);
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", event => {

	// Make sure it's not an extension attempting to request
	if (event.request.url.indexOf("http") === 0) {
		const updateCache = function (request) {
			return caches.open("cloverleaf").then(cache => {
				return fetch(request).then(response => {
					console.debug(`[PWA Builder] add page to offline ${response.url}`);
					return cache.put(request, response);
				});
			});
		};

		event.waitUntil(updateCache(event.request));

		event.respondWith(
			fetch(event.request).catch(error => {
				console.debug(`[PWA Builder] Network request Failed. Serving content from cache: ${error}`);

				// Check to see if you have it in the cache
				// Return response
				// If not in the cache, then return error page
				return caches.open("cloverleaf").then(cache => {
					return cache.match(event.request).then(matching => {
						const report = !matching || matching.status === 404 ? Promise.reject(new Error("no-match")) : matching;
						return report;
					});
				});
			})
		);
	}

});
