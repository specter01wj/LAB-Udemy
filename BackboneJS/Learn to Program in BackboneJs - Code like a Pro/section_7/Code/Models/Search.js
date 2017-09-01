var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.model = com.eduonix.model || {};
com.eduonix.model.Search = Backbone.Model.extend({
  url : 'http://localhost:8080/search',
  sync: function(method, model, options){
    if(this.get('query')){
      this.url = this.url + '/' + this.get('query');
    }
    Backbone.sync.call(this, method, model, options);
    this.url = 'http://localhost:8080/search';
  },
});
