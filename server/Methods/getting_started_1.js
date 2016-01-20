/**
 * Created by Rajith Hasith on 19/01/2016.
 */

Meteor.methods({
    addGenre: function (id) {
        UserProfile.update({
            userID:Meteor.userId()},
            {
                $addToSet:{
                    likeGenre:{$each:id}
                }
            });
    },

    removeGenre:function(id){
        UserProfile.update({
            userID:Meteor.userId()},
            {
                $pull:{likeGenre:id}
            });
    }

});