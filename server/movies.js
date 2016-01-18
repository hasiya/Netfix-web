/**
 * Created by Rajith Hasith on 18/01/2016.
 */
Meteor.publish('movies', function () {
    return Movies.find();
});
