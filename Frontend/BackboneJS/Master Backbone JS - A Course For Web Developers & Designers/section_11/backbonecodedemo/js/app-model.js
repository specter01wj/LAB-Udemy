//{task:'Create BackBone Course',status:'open',id:1}
//Create Class
/*
var TodoItem = Backbone.Model.extend({});
//Create Instance of a Class
var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 'open', id: 1 });

console.log(todoItem.get('task'));
todoItem.set({ task: 'Creating BackboneJs Course' });
console.log(todoItem.get('task'));

*/
$(document).ready(function () {

    //using jQuery
    /*
    var param = {};
    param.id = 1;
    $.get("itemlist-original.php", param, function (data) {
    var data = JSON.parse(data);
    var TodoItem = Backbone.Model.extend();

    var todoItem = new TodoItem(data);
    console.log(todoItem.get('task'));
    })
    */

    //using BackBone JS
    var TodoItem = Backbone.Model.extend({ urlRoot: 'itemlist-original.php' });

    var todoItem = new TodoItem({ id: 1 });
    //todoItem.url = 'itemlist-original.php?id=1';
    todoItem.fetch();

    console.log(todoItem.get('task'));
    todoItem.set({ task: 'Creating BackboneJs Course' });
    console.log(todoItem.get('task'));

    //todoItem.save();

    todoItem.destroy();

    console.log(todoItem.toJSON());

});
