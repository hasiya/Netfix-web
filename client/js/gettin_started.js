

Template.getting_started_1.helpers({
    getGenre:function(){
        all = Genre.find({}).fetch();
        chunks = [];
        size = 3;
        while (all.length > size) {
            chunks.push({ row: all.slice(0, size)});
            all = all.slice(size);
        }
        chunks.push({row: all});
        return chunks;
    }


});

Template.getting_started_1.events({
    "click .genre_btn":function(e){
        var btn = e.currentTarget;

        if(btn.attributes['data-checked'].value === 'false'){
            btn.attributes['data-checked'].value = 'true'
        }
        else{
            btn.attributes['data-checked'].value = 'false'
        }

        if(btn.attributes['data-checked'].value === 'true' ){
            btn.attributes['class'].value = 'btn btn-success genre_btn';
        }
        else
            btn.attributes['class'].value = 'btn btn-default genre_btn';
    }
});