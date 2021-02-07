
var ArtistsView = Backbone.View.extend({
  render: function(){
    this.$el.html('Artists View');

    return this;
  }
});


var AlbumsView = Backbone.View.extend({
  render: function(){
    this.$el.html('Albums View');

    return this;
  }
});


var GenresView = Backbone.View.extend({
  render: function(){
    this.$el.html('Genres View');

    return this;
  }
});


var AppRouter = Backbone.Router.extend({
  routes: {
    'albums': 'viewAlbums',
    'albums/:albumId': 'viewAlbumById',
    'artists': 'viewArtists',
    'genres': 'viewGenres',
    '*other': 'defaultRoute'
  },

  viewAlbumById: function(albumId){

  },

  viewArtists: function(){
    var view = new ArtistsView({el: '#container'});
    view.render();
  },

  viewGenres: function(){
    var view = new GenresView({el: '#container'});
    view.render();
  },

  viewAlbums: function(){
    var view = new AlbumsView({el: '#container'});
    view.render();
  },

  defaultRoute: function(){
    console.log('not found!');
  }

});

var router =  new AppRouter();
Backbone.history.start();


var NavView = Backbone.View.extend({
  events:{
    'click': 'onClick'
  },

  onClick: function(e){
    var $li = $(e.target);
    router.navigate($li.attr('data-url'), {trigger: true});
  }

});

var navView = new NavView({el: '#nav'});














