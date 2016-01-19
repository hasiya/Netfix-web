/**
 * Created by Rajith Hasith on 11/01/2016.
 */
UserProfile = new Meteor.Collection('user_profile');

/*
 * Allow
 */

UserProfile.allow({
    insert: function(){
        // Disallow inserts on the client by default.
        return false;
    },
    update: function(){
        // Disallow updates on the client by default.
        return false;
    },
    remove: function(){
        // Disallow removes on the client by default.
        return false;
    }
});

/*
 * Deny
 */

UserProfile.deny({
    insert: function(){
        // Deny inserts on the client by default.
        return true;
    },
    update: function(){
        // Deny updates on the client by default.
        return true;
    },
    remove: function(){
        // Deny removes on the client by default.
        return true;
    }
});

Meteor.publish('user_profile', function () {
    return UserProfile.find();
});
