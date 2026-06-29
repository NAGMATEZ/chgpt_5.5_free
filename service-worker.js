const CACHE_NAME = "budget-manager-v1.0.0";

const APP_ASSETS = [

".",

"./index.html",

"./manifest.json",

"./service-worker.js",

"./icon-192.png",

"./icon-512.png"

];

const CDN_CACHE = "budget-cdn";

const APP_CACHE = "budget-cache";

self.addEventListener("install",event=>{

event.waitUntil(

(async()=>{

const cache=await caches.open(APP_CACHE);

await cache.addAll(APP_ASSETS);

await self.skipWaiting();

})()

);

});

self.addEventListener("activate",event=>{

event.waitUntil(

(async()=>{

const keys=await caches.keys();

await Promise.all(

keys.map(key=>{

if(

key!==APP_CACHE&&

key!==CDN_CACHE

){

return caches.delete(key);

}

})

);

await clients.claim();

})()

);

});

self.addEventListener("message",event=>{

if(

event.data&&

event.data.type==="SKIP_WAITING"

){

self.skipWaiting();

}

});

self.addEventListener("fetch",event=>{

const request=event.request;

const url=new URL(request.url);

if(

request.method!=="GET"

)return;

event.respondWith(

(async()=>{

const cache=await caches.match(request);

if(cache){

return cache;

}

try{

const network=await fetch(request);

if(

url.origin===location.origin||

url.hostname.includes("unpkg.com")||

url.hostname.includes("jsdelivr.net")

){

const store=await caches.open(

url.origin===location.origin

?

APP_CACHE

:

CDN_CACHE

);

store.put(

request,

network.clone()

);

}

return network;

}

catch(e){

const offline=await caches.match(request);

if(offline){

return offline;

}

if(

request.destination==="document"

){

return caches.match("./index.html");

}

throw e;

}

})()

);

});
