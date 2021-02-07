
var TodoItem = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	}
});
