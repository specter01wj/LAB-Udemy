
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//----lecture 18
/*
var Song = Backbone.Model.extend({
   initialize: function(){
       console.log("A new song!!!");
   }
});

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({title: "Song 1"}),
    new Song({title: "Song 2"}),
    new Song({title: "Song 3"})
]);

songs.add(new Song({title: "Song 4"}));

songs.at(0);
songs.get("c1");
songs.remove(songs.at(0));
songs.length;
*/


//-----lecture 19
var Song = Backbone.Model.extend({
    initialize: function(){
        console.log("A new song!!!");
    }
});

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs();

songs.add(new Song({title: "Song 1", genre: "Jazz", download: 110}), {at: 0});
songs.push(new Song({title: "Song 2", genre: "Jazz", download: 90}));

var jazzSongs = songs.where({genre: "Jazz"});
var firstJazzSong = songs.findWhere({genre: "Jazz"});
console.log("Jazz Songs", jazzSongs);
console.log("First Jazz Song", firstJazzSong);

var filterSongs = songs.where({genre: "Jazz", title: "Song 2"});
console.log("Filtered Songs", filterSongs);

var topDownLoads = songs.filter(function(song){
   return song.get("download") > 100;
});
console.log("Top Downloads", topDownLoads);

songs.each(function(song){
    console.log(song);
});




