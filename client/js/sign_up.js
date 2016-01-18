

//Template.sign_up.events({
//    'submit form': function(e){
//        e.preventDefault();
//        var email = document.getElementById('email');
//        var password = document.getElementById('password');
//        emailEmp = true;
//        passEmp = true;
//
//        if(/\S/.test(email.value)){
//            email.style.background = "transparent"
//            emailEmp = false;
//        }
//        else{
//            email.style.backgroundColor = "#F08080";
//            emailEmp = true;
//        }
//
//        if(/\S/.test(password.value)){
//            password.style.background = "transparent"
//            passEmp = false;
//        }
//        else{
//            password.style.backgroundColor = "#F08080";
//            passEmp = true;
//        }
//
//        if(!emailEmp && !passEmp){
//            Meteor.call('addUser',email.value,password.value);
//
//            //var currentUser = Meteor.userId();
//
//            //Meteor.call('addProfile', currentUser);
//            //Accounts.createUser({
//            //    email: email,
//            //    password: password
//            //});
//            Meteor.loginWithPassword(email.value,password.value)
//            Router.go('/getting-started');
//        }
//
//        //Meteor.call('addUser',email,password);
//        //
//        //Meteor.call('addProfile', Meteor.userId());
//        ////Accounts.createUser({
//        ////    email: email,
//        ////    password: password
//        ////});
//        //Router.go('/getting-started');
//    },
//
//    "click .login": function () {
//        Login = true;
//    },
//});
