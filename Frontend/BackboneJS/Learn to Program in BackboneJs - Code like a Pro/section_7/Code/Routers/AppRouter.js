var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.router = com.eduonix.router || {};
com.eduonix.router.AppRouter = Backbone.Router.extend({
  searchModel : null,
  initialize: function(options){
    var self = this;
    self.searchModel = options.searchModel;
    self.listenTo(self.searchModel, 'change:query', self.navigateToSearch)
  },
  navigateToSearch: function(model, options){
    //manually navigate to the search url
    this.navigate("search/" + model.get('query'), {trigger: true});
  },
  routes: {'search/:query':'search'},
  search: function(query){
    var self = this;
    //If the model does not have a query set, (navigating directly to the route and not using the search button), then add this query atttribue silently so that the view does not sense the change
    if(self.searchModel.get('query') !== query){
      self.searchModel.set('query', query, {silent:true});
    }
    //now go the that view
    self.searchModel.fetch(
    {
      success: function(model){
      //create the results view
      var resultsView = new com.eduonix.view.ResultsView({model:model});
    },
      error: function(e){
        alert('No results available');
      }
    });
  }
});
