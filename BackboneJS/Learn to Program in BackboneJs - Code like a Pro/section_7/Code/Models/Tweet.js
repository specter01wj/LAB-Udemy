var com = com || {};
com.eduonix = com.eduonix || {};
com.eduonix.model = com.eduonix.model || {};
com.eduonix.model.Tweet = Backbone.Model.extend({
  parse: function(model){
    var friendly = moment(model.created_at,"ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();
    model.friendlyDate = friendly;
    return model;
  }
});
