/**
 * Created by Rajith Hasith on 08/01/2016.
 */


Meteor.methods({
    addUser: function (email, password) {
        var id =  Accounts.createUser({
            email: email,
            password: password
        });

        UserProfile.insert({
            userID: id,
            getting_Started_Step: "STAGE_1"

        });
    },
    test1:function(_id,title,runTime,genre,releaseDate,about,director,addedDate,videoServer,videoName,posterName){
       // var id = CryptoJS.MD5(guuid()).toString();
        Movies.insert({
            _id:_id,
            title:title,
            runTime:runTime,
            genre:genre,
            releaseDate:releaseDate,
            about: about,
            director: director,
            addedDate: addedDate,
            videoServer:videoServer,
            videoName:videoName,
            posterName:posterName
        })
    }


});

