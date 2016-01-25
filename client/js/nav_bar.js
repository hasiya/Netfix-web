/**
 * Created by Rajith Hasith on 17/01/2016.
 */
Template.nav_bar.helpers({
    getting_started_dne: function(){
        var userProfile = UserProfile.findOne({userID:Meteor.userId()});
        if(userProfile.getting_Started_Step === "Done"){
            return true;
        }else{
            return false;
        }
    }
});
var a =
    [{movies:{
        title:"Deadpool",
        runTime:106,
        genre:[1,2,16],
        releaseDate:new Date("Feb 12, 2016"),
        about: "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.",
        director: "Tim Miller",
        addedDate: new Date(),
        videoServer:1,
        videoName:"Deadpool.mp4",
        posterName:"Deadpool.jpg"
    }},

        {movies:{
            title:"Chi-Raq",
            runTime:127,
            genre:[7],
            releaseDate:new Date("Dec 4, 2015"),
            about: "A modern day adaptation of the ancient Greek play Lysistrata by Aristophanes, set against the backdrop of gang violence in Chicago.",
            director: "Spike Lee",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Chi_Raq.mp4",
            posterName:"Chi_Raq.jpg"
        }},

        {movies:{
            title:"Dark Shadows",
            runTime:113,
            genre:[4,12],
            releaseDate:new Date("May 11, 2012"),
            about: "An imprisoned vampire, Barnabas Collins, is set free and returns to his ancestral home, where his dysfunctional descendants are in need of his protection.",
            director: "Tim Burton",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Dark_Shadows.mp4",
            posterName:"Dark_Shadows.jpg"
        }},

        {movies:{
            title:"Ice Age: Continental Drift",
            runTime:88,
            genre:[3,2,4],
            releaseDate:new Date("13 Jul, 2012"),
            about: "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
            director: "Michael Berg",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Ice_Age_Continental_Drift.mp4",
            posterName:"Ice_Age_Continental_Drift.jpg"
        }},

        {movies:{
            title:"Moneyball",
            runTime:133,
            genre:[7,17],
            releaseDate:new Date("Sep 23, 2011"),
            about: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
            director: "Bennett Miller",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Moneyball.mp4",
            posterName:"Moneyball.jpg"
        }},

        {movies:{
            title:"Pulp Fiction",
            runTime:154,
            genre:[5,7],
            releaseDate:new Date("Oct 14, 1994"),
            about: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            director: "Quentin Tarantino",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Pulp_Fiction.mp4",
            posterName:"Pulp Fiction.jpg"
        }},

        {movies:{
            title:"Rise of the Planet of the Apes",
            runTime:105,
            genre:[1,7,16],
            releaseDate:new Date("Aug 5, 2011"),
            about: "A substance, designed to help the brain repair itself, gives rise to a super-intelligent chimp who leads an ape uprising.",
            director: "Rupert Wyatt",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Rise_of_the_Planet_of_the_Apes.mp4",
            posterName:"Rise_of_the_Planet_of_the_Apes.jpg"
        }},

        {movies:{
            title:"Suicide Squad",
            runTime:126,
            genre:[1,2,9],
            releaseDate:new Date("Aug 5, 2016"),
            about: "A secret government agency recruits imprisoned supervillains to execute dangerous black ops missions in exchange for clemency.",
            director: "David Ayer",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Suicide_Squad.mp4",
            posterName:"Suicide_Squad.jpg"
        }},

        {movies:{
            title:"The _Descendants",
            runTime:115,
            genre:[4,7],
            releaseDate:new Date("Dec 9, 2011"),
            about: "A land baron tries to reconnect with his two daughters after his wife is seriously injured in a boating accident.",
            director: "Alexander Payne",
            addedDate: new Date(),
            videoServer:1,
            videoName:"The_Descendants.mp4",
            posterName:"The_Descendants.jpg"
        }},

        {movies:{
            title:"The Rum Diary",
            runTime:120,
            genre:[4,7],
            releaseDate:new Date("Oct 28, 2011"),
            about: "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
            director: "Bruce Robinson",
            addedDate: new Date(),
            videoServer:1,
            videoName:"The_Rum_Diary.mp4",
            posterName:"The_Rum_Diary.jpg"
        }},

        {movies:{
            title:"Tower Heist",
            runTime:104,
            genre:[1,4,5],
            releaseDate:new Date("Nov 4, 2011"),
            about: "When a group of hard-working guys find out they've fallen victim to their wealthy employer's Ponzi scheme, they conspire to rob his high-rise residence.",
            director: "Brett Ratner",
            addedDate: new Date(),
            videoServer:1,
            videoName:"Tower_Heist.mp4",
            posterName:"Tower_Heist.jpg"
        }},

        {movies:{
            title:"X-Men: First Class",
            runTime:132,
            genre:[1,2,16],
            releaseDate:new Date("Jun 3, 2011"),
            about: "In 1962, the United States government enlists the help of Mutants with superhuman abilities to stop a malicious dictator who is determined to start World War III.",
            director: "Matthew Vaughn",
            addedDate: new Date(),
            videoServer:1,
            videoName:"X_Men_First_Class.mp4",
            posterName:"X_Men_First_Class.jpg"
        }}];



Template.nav_bar.events({
    //"click .test":function(){
    //    a.forEach(function(value,index,ar){
    //        var movie = value.movies;
    //        var id = uuid.new();
    //        Meteor.call("test1",id,movie.title,movie.runTime,movie.genre,
    //            movie.releaseDate,movie.about,movie.director,movie.addedDate,
    //            movie.videoServer,movie.videoName,movie.posterName);
    //    });
    //
    //
    //    //Meteor.call("test1");
    //}
});