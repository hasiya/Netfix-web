/**
 * Created by Rajith Hasith on 14/01/2016.
 */
var Login = true;

Template.signin_signup.helpers({
    isLogin: function () {
        return Login;
    }
});


Template.sign_in_sign_up.events({
    "submit .signup-form": function(e){
        console.log("sign up");
        e.preventDefault();
        console.log("sign up");
        var email = document.getElementById('signup-email');
        var password = document.getElementById('signup-password');
        emailEmp = true;
        passEmp = true;

        if(/\S/.test(email.value)){
            email.style.background = "transparent"
            emailEmp = false;
        }
        else{
            email.style.backgroundColor = "#F08080";
            emailEmp = true;
        }

        if(/\S/.test(password.value)){
            password.style.background = "transparent"
            passEmp = false;
        }
        else{
            password.style.backgroundColor = "#F08080";
            passEmp = true;
        }

        if(!emailEmp && !passEmp){
            Meteor.call('addUser',email.value,password.value);

            Meteor.loginWithPassword(email.value,password.value)
            Router.go('/getting-started');
        }
    },

    "submit .login-form": function(e){
        console.log("sign in");
        e.preventDefault();

        var email = document.getElementById('login-email');
        var password = document.getElementById('login-password');
        emailEmp = true;
        passEmp = true;

        if(/\S/.test(email.value)){
            email.style.background = "transparent"
            emailEmp = false;
        }
        else{
            email.style.backgroundColor = "#F08080";
            emailEmp = true;
        }

        if(/\S/.test(password.value)){
            password.style.background = "transparent"
            passEmp = false;
        }
        else{
            password.style.backgroundColor = "#F08080";
            passEmp = true;
        }

        if(!emailEmp && !passEmp){
            Meteor.loginWithPassword(email.value,password.value)
            //Router.go('/')
        }
    }

});