var TodoItem = Backbone.Model.extend({});

//Creating Collections

var TodoList = Backbone.Collection.extend({
 model:TodoItem
});


var todoList=new TodoList([
  new TodoItem({task:"Task One",status:"Open",id:"1"}),
  new TodoItem({task:"Task Two",status:"Open",id:"2"}),
  new TodoItem({task:"Task Three",status:"Open",id:"3"})
]);

var taksItem=new TodoItem({task:"Task Four",status:"Open",id:"4"});


todoList.on('change:task', function (model, value, options) {
    console.log(value);
});

taksItem.set({ task: "Task Item Four" });


todoList.on('add', function (todoItem) {
    console.log(todoItem.get('task'));
});
todoList.add(taksItem,{at:2});
/*
todoList.on('event-name',function() {
  console.log('event took place');
});
todoList.trigger('event-name');
*/

//example of Special Events like reset or fetch
//Special events are fired automatically


todoList.on('reset',resetCollection);

function resetCollection() {
  console.log('Reset Event Fired');
}
//todoList.reset();
todoList.off('reset',resetCollection);
todoList.reset();

//add is called when a model is added
//remove is called when a model is removed



