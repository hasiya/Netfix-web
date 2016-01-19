/**
 * Created by Rajith Hasith on 08/01/2016.
 */

Meteor.methods({
    addUser: function (email, password) {
        var id =  Accounts.createUser({
            email: email,
            password: password
        });

        UserProfile.insert({
            userID: id,
            getting_Started_Step: "STAGE_1"

        });
    }


});

