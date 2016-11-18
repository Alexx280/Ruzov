function hdPlay() {
    //var el1 = document.getElementById("hdbut");
    var elf = document.getElementById("hdbut");
    var video = document.querySelector('#player');
    if (elf.className == 'shd1') {
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource('http://136.243.144.157:1936/btv/btvStream_720p/playlist.m3u8');
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }
        //plyr.setup(video);
        elf.className = 'shd1On';
    }
    else {
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource('http://136.243.144.157:1936/btv/btvStream_360p/playlist.m3u8');
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        }
        //plyr.setup(video);
        elf.className = 'shd1';
    }
}