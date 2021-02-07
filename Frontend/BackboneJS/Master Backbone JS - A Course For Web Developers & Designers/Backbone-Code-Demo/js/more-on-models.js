/*
var TodoItem=Backbone.Model.extend({
	defaults: {
		task:'A New Task',
		status:'Open'
	}

});
var todoItem=new TodoItem();
console.log(todoItem.get('task'));

var TodoItem = Backbone.Model.extend({
    urlRoot: 'itemlist.php',
    parse : function (response) {
  		return response[0];
 	}
});
var todoItem=new TodoItem({id:1});
todoItem.fetch();
*/

/*
var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ 
	todo: {task:'Create BackBone Course', status: 'open', id: 1}, parse:true});

console.log(todoItem.attributes);
console.table(todoItem.attributes);
*/

var TodoItem = Backbone.Model.extend({
    urlRoot: 'itemlist.php',
    parse: function (response) {
        response = response[0];
        response.task = response.desc;
        delete response.desc;
        return response;
    }
});
var todoItem=new TodoItem({id:2});
todoItem.fetch();
console.log(todoItem.get('task'));