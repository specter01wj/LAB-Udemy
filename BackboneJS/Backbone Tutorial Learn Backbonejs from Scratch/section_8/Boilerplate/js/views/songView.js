
define(['jquery','underscore','backbone','models/song'], function($, _, Backbone, Song){
  var SongView = Backbone.View.extend({
    render: function(){
      this.$el.html(this.model.get('title'));
      return this;
    }
  });

  return SongView;
});





