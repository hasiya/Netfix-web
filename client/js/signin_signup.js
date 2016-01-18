Meteor.subscribe('user_profile');
Meteor.subscribe('movies')

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
            Meteor.call('addUser',email.value,password.value,function(err){
                console.log(err.reason)
            });

            Meteor.loginWithPassword(email.value,password.value,
                function(err){
                    if(err){
                        console.log(err.reason);
                    }else{
                        Router.go('/getting-started');
                    }
                });
        }
    },

    "submit .login-form": function(e){
        console.log("sign in");
        e.preventDefault();
        Meteor.call('test1');
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
            Meteor.loginWithPassword(email.value,password.value,
                function(err){
                    if(err){
                        console.log(err.reason);
                    }else{
                        Router.go('/');
                    }
                });
            //Router.go('/')
        }
    }

});