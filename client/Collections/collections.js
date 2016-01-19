/**
 * Created by Rajith Hasith on 18/01/2016.
 */
Movies = new Mongo.Collection('movies');
UserProfile = new Meteor.Collection('user_profile');
Genre = new Meteor.Collection('genre');

Meteor.subscribe('user_profile');
Meteor.subscribe('movies');
Meteor.subscribe('genre');