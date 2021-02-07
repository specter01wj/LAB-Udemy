var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.collection = com.eduonix.collection || {};
com.eduonix.collection.Timeline = Backbone.Collection.extend({
  //the model that this collection uses
  model: com.eduonix.model.Tweet,
  //the server side url to connect to for the collection
  url: 'http://localhost:8080/timeline',
  initialize: function(options){
  //anything to be defined on construction goes here
  },
});
