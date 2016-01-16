/**
 * Created by Rajith Hasith on 08/01/2016.
 */

Meteor.publish('user_profile', function () {
    return UserProfile.find();
});

Meteor.methods({
    addUser: function (email, password) {
        var id =  Accounts.createUser({
            email: email,
            password: password
        });

        UserProfile.insert({
            userID: id,
            getting_Started_Step: 1

        });
    },

    addProfile: function (userID) {
        UserProfile.insert({
            userID: userID,
            getting_Started_Step: 1

        })
    }


});

