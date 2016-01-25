/**
 * Created by Rajith Hasith on 24/01/2016.
 */
/*
Template.video.rendered = function(){
    var player = videojs('video1');
    var a = "fasd";
    //player.enterFullScreen();
   /!* videojs(
        "example_video_1",
        {"controls": true, "autoplay": true,"techOrder":["flash", "html5"]},
    function(){
        // Player (this) is initialized and ready.
         }
    );*!/
};*/


Template.video.onRendered(function(){
    this.autorun(function() {
        if (JWPlayer.loaded()) {
            jwplayer('playa').setup({
                file: 'rtmp://40.122.164.203:1935/vod2/JT_My_Love.mp4',
                width:'100%',
                autostart: true
            });
        }
    });
    //var player = videojs('video1');
    //player.enterFullWindow();
    //var s = 1;
})