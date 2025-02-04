'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c2dd844add03717e916cbe84734ea7fc",
"assets/AssetManifest.bin.json": "1d40b1835fcb2e15979fd90f4738ddf1",
"assets/AssetManifest.json": "8948d5eaae0d19a9f2520e5e01ef63fe",
"assets/FontManifest.json": "b08fe387013963bc333d4a9a1a047327",
"assets/fonts/Abel-Regular.ttf": "1052d6ca3993ae24a932304560a4c8b4",
"assets/fonts/geometr415-blk-bt-black.ttf": "da6374675baaca1510223a6441371da3",
"assets/fonts/MaterialIcons-Regular.otf": "55ad8361056b15ae9daed676e2431285",
"assets/fonts/sf-ui-display-regular.otf": "15591c67ad9e86bb60b555286f7393f9",
"assets/fonts/sf-ui-display-semibold.otf": "043e3f3a51f80f67ef747ff9f26b35f9",
"assets/fonts/SF-UI-Display-Semibold.ttf": "da9ed8910fe5eee68346a6a5c9a937ae",
"assets/images/jpgs/pic1.jpg": "5ec6231adb73e4809e8f8ac6db6ff0d5",
"assets/images/jpgs/pic2.jpg": "d99809233129109305a7cfc79a7bef4a",
"assets/images/jpgs/pic3.jpg": "833ce34919169e3007516ea0e87eefe5",
"assets/images/jpgs/pic4.jpg": "6489c101124fe4b4f596823fd52165c1",
"assets/images/pngs/avatar.png": "c3686ca8cd2b219e9049fa8ba7c5c662",
"assets/images/pngs/back-arrow.png": "e381d4505ac545e88dc938f4a85a306f",
"assets/images/pngs/email.png": "edf47cf4b3e48809ddcfa7152f336c38",
"assets/images/pngs/explore.png": "83b13293d1aeec459a48e871b5f9fbe9",
"assets/images/pngs/facebook.png": "3b5ec41656815e6f741b56aa2f871b92",
"assets/images/pngs/icon-bookmark.jpg": "33bc4959bfcf015d7fd68ecd918f1904",
"assets/images/pngs/icon-bookmark.png": "05b963cead5513e3465db09fb0524e83",
"assets/images/pngs/icon-location.jpg": "74b118b101cb4708947d3f7a1ed194a0",
"assets/images/pngs/icon-location.png": "d7d15ac46298617c11ccd7788f4b55d4",
"assets/images/pngs/icon-peoples.jpg": "935d298326fdd6958fe1dceba1b60c8f",
"assets/images/pngs/icon-peoples.png": "8dcfc5ccd94ce4a100690807fdbaa2f1",
"assets/images/pngs/icon-star.jpg": "2d75bf3a3ef31cd1266c197aeae46f45",
"assets/images/pngs/icon-star.png": "e098f1e5b4984d5d35c0ef2bcc98f8b1",
"assets/images/pngs/image-1.jpg": "541aa2391b9d1e6568b3004aeb8e9929",
"assets/images/pngs/image-arc.png": "f122f0e130554e9e1f781e9348496212",
"assets/images/pngs/image-onboard-1.png": "b7eee09121d341048b1ef8e8ef915e5e",
"assets/images/pngs/image-onboard-2.png": "7869450552c03859b3d9065e3dd6684f",
"assets/images/pngs/image-onboard-3.png": "ca82e6cee535735e37dc2b464dc5ed58",
"assets/images/pngs/image-place-1.png": "bdc01f138d5381bfcc56c9e0c553456a",
"assets/images/pngs/image-place-2.png": "021d6e295073f12f0ae5565f95ffb658",
"assets/images/pngs/image-place-3.png": "2c8b8485b5bd28c0de6065069cdadc0a",
"assets/images/pngs/image-place-4.png": "4ffc4e5f2aa59e1503e50bc7e5969d5e",
"assets/images/pngs/image-place-5.png": "003d5d078eac94c543a4c94f5213c5ec",
"assets/images/pngs/image-place-6.png": "593f8afe1a54a4992746d4648ee01ecc",
"assets/images/pngs/instagram.png": "8ea45171ec7503c56687bb139150ad4b",
"assets/images/pngs/Notifications.png": "28f7e57d855c4f0be7d91b01002928fa",
"assets/images/pngs/place1.png": "87a63fcb6fc7497ddd7b55ef984e232f",
"assets/images/pngs/place2.png": "0474fc259d7b15038460cac22a24041a",
"assets/images/pngs/profilephoto.png": "0973b101442e5e954a36158074cb2d9a",
"assets/images/pngs/screenshot-home.png": "d8f6a661554426c25c303f5e32505eb8",
"assets/images/pngs/screenshot-profile.png": "45ab44eb9b3788b89b073b0366d7af07",
"assets/images/pngs/twitter.png": "2ef9a3ecc3cc7bd5ed4b6fb96f0c098b",
"assets/images/svgs/icon-bookmark.svg": "2377c48773173adbeb848c7ff8385065",
"assets/images/svgs/icon-location.svg": "a914e60450bf8410c0c39bcab0a32df4",
"assets/images/svgs/icon-peoples.svg": "50f06eb95af0592fa2ac379da1434667",
"assets/images/svgs/icon-star.svg": "25c58e0c516a9d455cf9360e6813296a",
"assets/images/svgs/image-arrow.svg": "f6f0e19d5be096de9df1b48c738643e9",
"assets/images/svgs/image-onboard-1.svg": "d2f0548d953efc14f4aae8f43108409c",
"assets/images/svgs/image-onboard-2.svg": "ba84b4ec56d4a2fb3cf28132d4080a71",
"assets/images/svgs/image-onboard-3.svg": "13497227fb648def2cc472df8777b6fb",
"assets/images/svgs/image-place-1.svg": "dacb7a7bcb545a0deec55a5a80aaae22",
"assets/images/svgs/image-place-2.svg": "3deb18d6a968db509e260179a90bf5be",
"assets/images/svgs/image-place-3.svg": "4db49f71597e54bc2f7773e5eefea9a3",
"assets/images/svgs/image-place-4.svg": "9a181ea11ae32fd0e93678fedb0a3f84",
"assets/images/svgs/image-place-5.svg": "fe6279acac974af0606c40da6662b1c3",
"assets/images/svgs/image-place-6.svg": "dacb7a7bcb545a0deec55a5a80aaae22",
"assets/NOTICES": "9baeb8ac08bcb5bc79d7821c49cc8973",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5e40176af811077e245e63665c8a4e02",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7b26dc8381b427992c6cfc60c87fa2b4",
"/": "7b26dc8381b427992c6cfc60c87fa2b4",
"main.dart.js": "5a08c66706aab3bb7b5c64cb748cd79c",
"manifest.json": "2ed2fcbdf0df5b47c82a66a5d36d9ea3",
"version.json": "fc784168e49bd2071a1914f7a2ecd047"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
