
/**
 * Created by Rajith Hasith on 25/01/2016.
 */

Template.banner.helpers({
    getLatest:function(){
        var movies = Movies.find({},{sort:{addedDate:-1}});
        //var returnObject=[];
        //movies.forEach(function(element,index,array){
        //    returnObject.push({
        //            movie: element,
        //        index:index
        //        }
        //    );
        //});
        //return returnObject;
        return movies;
    },

    indexZero:function(index){
        return index === 0;
    }
})
