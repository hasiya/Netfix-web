/**
 * Created by Rajith Hasith on 18/01/2016.
 */
var driver = new MongoInternals.RemoteCollectionDriver(
    "mongodb://40.84.225.144:28000/netfix_movies");

Movies = new Mongo.Collection('movies', {_driver: driver});

/*
 * Allow
 */

Movies.allow({
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

Movies.deny({
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