/**
 * Created by Rajith Hasith on 07/01/2016.
 */

Router.onBeforeAction(function(){
    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.render('sign_in_sign_up');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
})

Router.map(function(){
    this.route('/', function(){

        console.log("user in")
        this.render('home')

    });

    this.route('/getting-started',function(){

        this.render('getting_started')
    });
});