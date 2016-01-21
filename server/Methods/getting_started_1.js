/**
 * Created by Rajith Hasith on 19/01/2016.
 */

Meteor.methods({
    addGenre: function (id) {
        UserProfile.update({
            userID:Meteor.userId()},
            {
                $set:{
                    likeGenre:id
                }
            });
    },

    removeGenre:function(id){
        UserProfile.update({
            userID:Meteor.userId()},
            {
                $pull:{likeGenre:id}
            });
    },
    gettingStartedDone: function () {
        UserProfile.update({
            userID: Meteor.userId()},
            {
                $set:{getting_Started_Step:"Done"}
        });
    }

});