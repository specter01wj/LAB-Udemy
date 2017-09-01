var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.view = com.eduonix.view || {};
com.eduonix.view.TimelineView = Backbone.View.extend({
  el: '#timeline',
  template: Handlebars.compile($('#timeline-template').html()),
  initialize: function(options){
    var self = this;
    self.timeline = new com.eduonix.collection.Timeline();
    self.render();
    self.timeline.fetch({reset:true});
    self.listenTo(self.timeline,'reset',self.render);
  },
  render: function(){
    var self = this;
    if (self.timeline.models.length > 0){
      var output = self.template({tweet:self.timeline.toJSON()});
      self.$el.append(output);
    }
    return self;
  }
});
