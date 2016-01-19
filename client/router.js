/**
 * Created by Rajith Hasith on 07/01/2016.
 */

Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        // if the user is not logged in, render the Login template
        this.render('sign_in_sign_up');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
    this.next();
});

Router.map(function () {
    this.route('/', function () {
        var userProfile = UserProfile.findOne({userID: Meteor.userId()});
        if (userProfile.getting_Started_Step !== "Done") {
            this.redirect('/getting-started');
        } else {
            console.log("user in");
            this.render('home')
        }
    });

    this.route('/getting-started', function () {
        var userProfile = UserProfile.findOne({userID: Meteor.userId()});
        switch (userProfile.getting_Started_Step) {
            case "STAGE_1":
                this.render('getting_started_1');
                break;
            case "STAGE_2":
                break;
            default:
                this.render('home');
        }
    });
});