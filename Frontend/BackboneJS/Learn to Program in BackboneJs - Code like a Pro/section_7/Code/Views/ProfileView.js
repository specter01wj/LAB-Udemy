var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.view = com.eduonix.view || {};
com.eduonix.view.ProfileView = Backbone.View.extend({
  el: '#profile-view',
  template: Handlebars.compile($("#profile-template").html()),
  model: null,
  initialize: function(options){
    var self = this;
    //create the model for this view to render
    self.model = new com.eduonix.model.Profile();
    //force the fetch to fire a reset event
    self.model.fetch({});
    self.listenTo(self.model, 'change', self.render);
  },
  render: function(){
    var self = this;
    var output = self.template({user: self.model.toJSON()});
    self.$el.html(output);
    return self;
  },
});
