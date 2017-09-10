importScripts('cache-polyfill.js');
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open('perdola').then(function(cache) {
return cache.addAll([
'index.html',
'compiled/style.min.css',
'compiled/jssource.min.js',
'data/sites.json',
'logos/DeviantArt.svg',
'logos/evernote.svg',
'logos/frst-is-nice.svg',
'logos/genius.svg',
'logos/guardian.svg',
'logos/guilded.svg',
'logos/ifttt.svg',
'logos/lernu.svg',
'logos/linkedin.svg',
'logos/mapbox.svg',
'logos/mojang.svg',
'logos/songsterr.svg',
'logos/tic-80.svg',
'logos/tumblr-logo-blue.svg',
'logos/yoyogames.svg'
]);
})
);
});
self.addEventListener('fetch', function(event) {
event.respondWith(
caches.match(event.request).then(function(response) {
return response || fetch(event.request);
})
);
});
