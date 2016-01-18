

Template.getting_started_1.helpers({
    genres:
        [
            [
                {genre: "Action"},
                {genre: "Adventure"},
                {genre: "Animation"}
            ],
            [
                {genre: "Comedy"},
                {genre: "Crime"},
                {genre: "Documentary"},
            ],
            [
                {genre: "Drama"},
                {genre: "Family"},
                {genre: "Fantasy"},
            ],
            [
                {genre: "Foreign"},
                {genre: "History"},
                {genre: "Horror"}
            ],
            [
                {genre: "Music"},
                {genre: "Mystery"},
                {genre: "Romance"}
            ],
            [
                {genre: "Science Fiction"},
                {genre: "Sport"},
                {genre: "TV Movie"}
            ],
            [
                {genre: "Thriller"},
                {genre: "War"},
                {genre: "Western"}
            ]
        ]

});

Template.getting_started_1.events({
    'click .test':function(){
        var A = Movies.find();
        A.forEach(function(r){
            console.log(r.name);
        });
    }
});