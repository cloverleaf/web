// This is the "Offline copy of pages" service worker
// Template from PWA Builder (https://www.pwabuilder.com/serviceworker)

// Install stage sets up the index page (home page) in the cache and opens a new cache
self.addEventListener("install", event => {
	const indexPage = new Request("index.html");
	event.waitUntil(
		fetch(indexPage).then(response => caches.open("cloverleaf").then(cache => {
			console.debug(`[PWA Builder] Cached index page during Install ${response.url}`);
			return cache.put(indexPage, response);
		}))
	);
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", event => {

	// Make sure it's not an extension attempting to request
	if (event.request.url.indexOf("http") === 0) {
		const updateCache = function (request) {
			return caches.open("cloverleaf").then(cache => fetch(request).then(response => {
				console.debug(`[PWA Builder] add page to offline ${response.url}`);
				return cache.put(request, response);
			}));
		};

		event.waitUntil(updateCache(event.request));

		event.respondWith(
			fetch(event.request).catch(error => {
				console.debug(`[PWA Builder] Network request Failed. Serving content from cache: ${error}`);

				// Check to see if you have it in the cache
				// Return response
				// If not in the cache, then return error page
				return caches.open("cloverleaf").then(cache => cache.match(event.request).then(matching => {
					const report = !matching || matching.status === 404 ? Promise.reject(new Error("no-match")) : matching;
					return report;
				}));
			})
		);
	}
});

self.addEventListener("message", event => {

	if (location.origin === event.origin) {

		caches.open("cloverleaf").then(cloverleaf => {
			// Get all cached files
			cloverleaf.matchAll().then(res => {
				res.filter(function (cacheName) {
					// If the item is a bundle but not currently being used
					if (cacheName.url.indexOf("bundles/bundle-") > -1 &&
							event.data.indexOf(cacheName.url) === -1) {
						// Mark for deletion
						return true;
					} else {
						// Keep it
						return false;
					}
				}).map(function (mapItem) {
					const toDelete = new Request(mapItem.url);
					cloverleaf.delete(toDelete).then(e =>
						e ? console.debug("Removed unused bundle", toDelete) : console.warn("Failed to remove bundle", toDelete)
					);
				});
			});
		});

	} else {
		throw new Error("Lisa, in this house we obey the laws of CORS!");
	}
});