/**
 * Created by Rajith Hasith on 17/01/2016.
 */
Template.nav_bar.helpers({
    getting_started_dne: function(){
        var userProfile = UserProfile.findOne({userID:Meteor.userId()});
        if(userProfile.getting_Started_Step === "Done"){
            return true;
        }else{
            return false;
        }
    }
})