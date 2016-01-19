/**
 * Created by Rajith Hasith on 19/01/2016.
 */

Meteor.methods({
    addG:function(genres){
        var i = 1;
        genres.forEach(function(elem){
            Genre.insert({
                id:i,
                genre:elem.genre
            });
            i++
        })
    }
});