
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//---lecture 25
/*var SongView = Backbone.View.extend({

    tagName: "span",

    className: "song-view",

    id: "song-1",

    attributes: {
      "data-genre": "Jazz"
    },

    render: function(){
        this.$el.html("Hi, James Wang!!!");

        return this;
    }
});

//var songView = new SongView({el: "#container"});
//songView.render();

//var songView = new SongView();
//songView.render();
//$("#container").html(songView.$el);

var songView = new SongView();
$("#container").html(songView.render().$el);*/

//----lecture 26
/*var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

    render: function(){
        this.$el.html(this.model.get('title'));

        return this;
    }
});

var song = new Song({ title: 'Blue in Green.' });

var songView = new SongView({ el: "#container", model: song });
songView.render();*/

/*var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: 'li',

    render: function(){
        this.$el.html(this.model.get('title'));

        return this;
    }
});

var SongsView = Backbone.View.extend({

    render: function(){
        var self = this;

        this.model.each(function(song){
            var songView = new SongView({ model: song });
            self.$el.append(songView.render().$el);
        });
    }
});

var songs = new Songs([
    new Song({title: 'Blue in Green.'}),
    new Song({title: 'Road Trip.'}),
    new Song({title: 'King and Queens.'})
]);

var songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();*/

//----lecuter 27
/*var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    events: {
      "click": "onClick",
        "click .bookmark": "onClickBookmark"
    },

    onClick: function(){
        console.log("Listen Clicked!");
    },
    onClickBookmark: function(e){
        e.stopPropagation();
        console.log("Bookmark Clicked!");
    },

    render: function(){
        this.$el.html(this.model.get("title") +
            "<button>Listen</button>" +
            "<button class='bookmark'>Bookmark</button>");

        return this;
    }
});

var song = new Song({title: "Blue in Green"});
var songView = new SongView({el: "#container", model: song});
songView.render();*/

//----lecture 28
/*var Song = Backbone.Model.extend({
    defaults: {
        listeners: 0
    }
});

var SongView = Backbone.View.extend({
    initialize: function(){
        //this.model.on("change", this.render, this);
        this.model.on("change", this.onModelChange, this);
    },

    onModelChange: function(){
        this.$el.addClass("someClass").html("This is newClass!");
    },

    render: function(){
        this.$el.html(this.model.get("title") +
            " - Listeners: " +
            this.model.get("listeners"));

        return this;
    }
});

var song = new Song({title: "Blue in Green"});
var songView = new SongView({el: "#container", model: song});
songView.render();

//song.set("listeners", 1);*/

//-----lecture 29
/*var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
    model: Song
});

var SongView = Backbone.View.extend({
    tagName: "li",
    render: function(){
        this.$el.html(this.model.get("title"));
        this.$el.attr("id", this.model.id);

        return this;
    }
});

var SongsView = Backbone.View.extend({
    tagName: "ul",
    initialize: function(){
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
    },
    onSongAdded: function(song){
        //console.log("Song added");
        var songView = new SongView({model: song});
        this.$el.append(songView.render().$el);
    },
    onSongRemoved: function(song){
        //console.log("Song removed");
        this.$el.find("li#" + song.id).remove();
        //this.$("li#" + song.id).remove();
    },
    render: function() {
        var self = this;
        this.model.each(function (song) {
            var songView = new SongView({model: song});
            self.$el.append(songView.render().$el);
        });
    }
});

var songs = new Songs([
    new Song({id: 1, title: "Blue in Green"}),
    new Song({id: 2, title: "So What"}),
    new Song({id: 3, title: "All Blue"})
]);

var songsView = new SongsView({el: "#songs", model: songs});
songsView.render();

//songs.add(new Song({ title: "New Song" }));
//songs.add(new Song());
//songs.remove(songs.at(0));*/

//----lecture 30
var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({
    render: function(){
        var template = _.template($("#songTemplate").html());
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});

var song = new Song({title: "Blue in Green", plays: 10000});
var songView = new SongView({el: "#container", model: song});
songView.render();


