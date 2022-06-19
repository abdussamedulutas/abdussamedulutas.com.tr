self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "images/fontawesome-webfont-ed629.svg",
            "images/icon-738e1.webp",
            "images/mui-logo-a0416.svg",
            "images/profile-571e1.webp",
            "images/react-logo-6264d.svg",
            "fonts/ttf/Cantarell-Regular-ebc1a.ttf",
            "fonts/ttf/Cantarell-Bold-89767.ttf",
            "favicon.png"
        ])
    );
});

const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener('fetch', function(event) {
    event.respondWith(checkCache(event));
});

async function checkCache(event)
{
    if(
        event.request.destination == "document"
    )
    {
        return await fetch(event.request);
    }else{
        const cache = await caches.open("v1");
        let file = await cache.match(event.request);
        if(file)
        {
            fetch(event.request).then(e => {
                cache.add(e);
                return e;
            });
            return file;
        }else{
            console.log("İndiriliyor: "+event.request.url);
            return await fetch(event.request).then(e => {
                cache.add(e);
                return e;
            })
        }
    }
}