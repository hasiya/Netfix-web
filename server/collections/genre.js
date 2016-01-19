/**
 * Created by Rajith Hasith on 18/01/2016.
 */


Genre = new Mongo.Collection('genre', {_driver: driver});

/*
 * Allow
 */

Genre.allow({
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

Genre.deny({
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

Meteor.publish('genre', function () {
    return Movies.find();
});
