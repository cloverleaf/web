/* global self, caches, fetch */
// This is the service worker with the Cache-first network
// Template from PWA Builder (https://www.pwabuilder.com/serviceworker)
const CACHE = 'Cloverleaf';
const precacheFiles = [
  // Cloverleaf source
  '/',
  'index.html',
  'style.css',
  'compiled/jssource.min.js',
  // Libraries
  'libs/clipboard.min.js',
  'libs/materialize.min.js',
  'libs/materialize.min.css',
  'libs/seedrandom.min.js',
  'libs/sha3.min.js',
  // Fonts
  'fonts/MaterialIcons-Regular.eot',
  'fonts/MaterialIcons-Regular.ttf',
  'fonts/MaterialIcons-Regular.woff2',
  'fonts/text-security-disc.eot',
  'fonts/text-security-disc.svg',
  'fonts/text-security-disc.ttf',
  'fonts/text-security-disc.woff',
  // Data
  'data/sites.json',
  'data/themes.json',
  // Preset Logos
  'logos/Ada.svg',
  'logos/Adobe.svg',
  'logos/Airbnb.svg',
  'logos/AliExpress.svg',
  'logos/Alipay.svg',
  'logos/allegorithmic.svg',
  'logos/AlternativeTo.svg',
  'logos/Amazon.svg',
  'logos/Amino.svg',
  'logos/Apple.svg',
  'logos/Artsy.svg',
  'logos/Baidu.svg',
  'logos/Battlenet.png',
  'logos/BBC.svg',
  'logos/Behance.svg',
  'logos/Bing.svg',
  'logos/Blend Swap.svg',
  'logos/Blizzard.svg',
  'logos/Channel 4.svg',
  'logos/Chrono.gg.svg',
  'logos/Circle.svg',
  'logos/CodePen.svg',
  'logos/DeviantArt.svg',
  'logos/Discord.svg',
  'logos/Disqus.svg',
  'logos/Dribbble.svg',
  'logos/Dropbox.svg',
  'logos/Duolingo.svg',
  'logos/eBay.svg',
  'logos/Epic Games.svg',
  'logos/Etsy.svg',
  'logos/Evernote.svg',
  'logos/Facebook.svg',
  'logos/Factorio.svg',
  'logos/Fanatical.svg',
  'logos/FANDOM.svg',
  'logos/Firebox.svg',
  'logos/Firefox.svg',
  'logos/Flickr.svg',
  'logos/Forvo.svg',
  'logos/Freelancer.svg',
  'logos/Genius.svg',
  'logos/GeoGuessr.svg',
  'logos/Gfycat.svg',
  'logos/giffgaff.svg',
  'logos/GIPHY.svg',
  'logos/GitHub.svg',
  'logos/GitLab.svg',
  'logos/GOG.svg',
  'logos/Google.svg',
  'logos/Guilded.svg',
  'logos/Hi-Rez.png',
  'logos/HitFilm.svg',
  'logos/Humble Bundle.svg',
  'logos/IFTTT.svg',
  'logos/IMDb.svg',
  'logos/imgur.svg',
  'logos/Instagram.svg',
  'logos/itch.io.svg',
  'logos/itv.svg',
  'logos/JustGiving.svg',
  'logos/Keybase.svg',
  'logos/Ko-fi.svg',
  'logos/last.fm.svg',
  'logos/lernu.svg',
  'logos/Lingvist.svg',
  'logos/LinkedIn.svg',
  'logos/Lloyds Bank.svg',
  'logos/Mail.Ru.svg',
  'logos/Mapbox.svg',
  'logos/Mega.svg',
  'logos/Messenger.svg',
  'logos/Microsoft.svg',
  'logos/Minecraft.svg',
  'logos/Mojang.svg',
  'logos/MSN.svg',
  'logos/MuseScore.svg',
  'logos/My Nintendo.svg',
  'logos/Native Instruments.svg',
  'logos/Nectar.png',
  'logos/Netflix.svg',
  'logos/OpenStreetMap.svg',
  'logos/Opera.svg',
  'logos/Origin.svg',
  'logos/osu!.png',
  'logos/Oxfam.svg',
  'logos/Pastebin.png',
  'logos/Patreon.svg',
  'logos/PayPal.svg',
  'logos/paysafecard.svg',
  'logos/PCPartPicker.svg',
  'logos/Pinterest.svg',
  'logos/pixiv.svg',
  'logos/plug.dj.svg',
  'logos/Pocket.svg',
  'logos/Prezi.svg',
  'logos/QQ.svg',
  'logos/Rabbit.svg',
  'logos/Reddit.svg',
  'logos/Rockstar Games Social Club.svg',
  'logos/Skype.svg',
  'logos/Snapchat.svg',
  'logos/Songsterr.svg',
  'logos/Soundcloud.svg',
  'logos/Spotify.svg',
  'logos/Square Enix.svg',
  'logos/Stack Overflow.svg',
  'logos/Steam.svg',
  'logos/Streamable.svg',
  'logos/Tesco.svg',
  'logos/The Guardian.svg',
  'logos/TheCubicle.us.svg',
  'logos/tic.computer.svg',
  'logos/Trello.svg',
  'logos/Tumblr.svg',
  'logos/Twitch.svg',
  'logos/Twitter.svg',
  'logos/Uber.svg',
  'logos/Ubisoft.svg',
  'logos/UCAS.svg',
  'logos/Unity ID.svg',
  'logos/Uplay.svg',
  'logos/Venmo.svg',
  'logos/Vimeo.svg',
  'logos/Visa Checkout.svg',
  'logos/Vivaldi.svg',
  'logos/VK.svg',
  'logos/WeChat.svg',
  'logos/Wikipedia.svg',
  'logos/Wordpress.svg',
  'logos/Xbox.svg',
  'logos/XDA Developers.svg',
  'logos/Yahoo.svg',
  'logos/YouTube.svg',
  'logos/YoYo Games.svg',
  // PWA stuff
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'browserconfig.xml',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.ico',
  'manifest.json',
  'mstile-144x144.png',
  'mstile-150x150.png',
  'mstile-310x150.png',
  'mstile-310x310.png',
  'mstile-70x70.png',
  'safari-pinned-tab.svg'
];

function precache () {
  return caches.open(CACHE).then((cache) => {
    return cache.addAll(precacheFiles);
  });
}

function fromCache (request) {
  // we pull files from the cache first thing so we can show them fast
  return caches.open(CACHE).then((cache) => {
    return cache.match(request).then((matching) => {
      if (matching) {
        return matching;
      }

      console.log(request);
      Promise.reject(new Error('no-match'));
    });
  });
}

function update (request) {
  // this is where we call the server to get the newest version of the
  // file to use the next time we show view
  return caches.open(CACHE).then((cache) => {
    return fetch(request).then((response) => {
      return cache.put(request, response);
    });
  });
}

function fromServer (request) {
  // this is the fallback if it is not in the cache to go to the server and get it
  try {
    return fetch(request).then((response) => { return response; });
  } catch (error) {
    if (navigator.onLine) { // If the browser is online
      console.log(error);
      console.log(request);
      console.trace();
    }
  }
}

// Install stage sets up the cache-array to configure pre-cache content
self.addEventListener('install', (evt) => {
  console.debug('The service worker is being installed.');
  evt.waitUntil(precache().then(() => {
    console.debug('Skip waiting on install');
    return self.skipWaiting();
  }));
});

// allow sw to control of current page
self.addEventListener('activate', (event) => {
  console.debug('Claiming clients for current page');
  return self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.debug(`The service worker is serving the asset. ${evt.request.url}`);
  evt.respondWith(fromCache(evt.request).catch(fromServer(evt.request)));
  evt.waitUntil(update(evt.request));
});
