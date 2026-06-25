
const CACHE_NAME = "budget-manager-v1.0.0";

const APP_SHELL = [

"./",
"./index.html",
"./manifest.json",
"./icon-192.svg",
"./icon-512.svg"

];

const CDN_ASSETS = [

"https://unpkg.com/dexie/dist/dexie.js",

"https://cdn.jsdelivr.net/npm/chart.js",

"https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"

];

self.addEventListener(
"install",
event=>{

event.waitUntil(

(async()=>{

const cache =
await caches.open(
CACHE_NAME
);

await cache.addAll(
APP_SHELL
);

for(const url of CDN_ASSETS){

try{

await cache.add(url);

}catch(err){

console.warn(
"CDN precache hiba:",
url
);

}

}

await self.skipWaiting();

})()

);

}
);

self.addEventListener(
"activate",
event=>{

event.waitUntil(

(async()=>{

const names =
await caches.keys();

await Promise.all(

names.map(name=>{

if(
name !== CACHE_NAME
){

return caches.delete(
name
);

}

})

);

await self.clients.claim();

})()

);

}
);

self.addEventListener(
"message",
event=>{

if(
event.data &&
event.data.type ===
"SKIP_WAITING"
){

self.skipWaiting();

}

});

self.addEventListener(
"fetch",
event=>{

const request =
event.request;

if(
request.method !==
"GET"
){

return;

}

event.respondWith(

(async()=>{

const cache =
await caches.open(
CACHE_NAME
);

const cached =
await cache.match(
request
);

if(cached){

return cached;

}

try{

const response =
await fetch(
request
);

if(
response &&
response.status === 200
){

cache.put(
request,
response.clone()
);

}

return response;

}catch(err){

const offline =
await cache.match(
"./index.html"
);

if(offline){

return offline;

}

throw err;

}

})()

);

});
