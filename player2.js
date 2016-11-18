(function () {
    var video = document.querySelector('#player');

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource('http://136.243.144.157:1936/btv/btvStream_360p/playlist.m3u8');
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
            video.play();
        });
        plyr.volume = 0.2;
    }
    plyr.setup(video);
})();