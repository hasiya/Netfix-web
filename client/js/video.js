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

var server1 = "rtmp://40.122.164.203:1935/vod2/";
Template.video.onRendered(function(){
    this.autorun(function() {
        var id = Router.current().params._id;
        var movie = Movies.findOne({_id:id});
        if (JWPlayer.loaded()) {
            jwplayer('playa').setup({
                file: server1+movie.videoName,
                width:'100%',
                autostart: true
            });
        }
    });
    //var player = videojs('video1');
    //player.enterFullWindow();
    //var s = 1;
});

Template.video.helpers({
    getGen: function(genres){
        var gens = [];
        genres.forEach(function(element,index,array){
            var gen = Genre.findOne({id:element}).genre;
            gens.push(gen);

        });
        return gens
    }
})