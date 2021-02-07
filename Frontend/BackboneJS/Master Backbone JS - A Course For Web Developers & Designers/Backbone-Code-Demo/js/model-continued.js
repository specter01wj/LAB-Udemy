//var TodoItem = Backbone.Model.extend({urlRoot: 'itemlist.php'});
//default version
/*
var TodoItem=Backbone.Model.extend({
	toJSON:function(){
		return _.clone(this.attributes);
	}
})
*/
//override
/*
var TodoItem = Backbone.Model.extend({
    urlRoot: 'itemlist.php',
    toJSON: function () {
        var attrs = _.clone(this.attributes);
        attrs.desc = attrs.task;
        attrs = _.pick(attrs, 'desc', 'status');
        return { todo: attrs };
    },
    parse: function (response) {
        response = response[0];
        response.task = response.desc;
        delete response.desc;
        return response;
    }
})

var todoItem=new TodoItem({id:2});
todoItem.fetch();
console.log(todoItem.get('task'));
todoItem.set({task:'Creating BackboneJS course'});
todoItem.save();
*/
var TodoItem = Backbone.Model.extend({
    idAttribute:'_id'
});
var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 'open', _id: 1 });

console.log(todoItem.id);