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

//add a model Instance
var taksItem=new TodoItem({task:"Task Four",status:"Open",id:"4"});
var taskItem=new TodoItem({task:"Task Five",status:"Closed",id:"5"});
todoList.add(taksItem,{at:2});
todoList.push(taskItem);

//Get Number of Model Instances
console.log(todoList.length);

//get Model Instance at Index 1
console.log(todoList.at(1));

//Get Model by Id
//By Model Id
console.log(todoList.get(1));

console.log(todoList.get("c3"));

//find methods used on Collections
var openItems = todoList.where({ status: "Open" });

console.log(openItems);


var firstMatch = todoList.findWhere({ status: "Open" });

console.log(firstMatch);

//passing multiple search criteria
var taskTwo = todoList.where({ status: "Open",task:"Task Two" });
console.log(taskTwo);

//Making use of filter method
var findItemsByStatusAndID = todoList.filter(function(todoItem){
    return todoItem.get("status")=="Open" && todoItem.get("id") > 2
})
console.log(findItemsByStatusAndID);

//iterating collection
todoList.each(function (todoItem) {
    console.log(todoItem);
})
//removing a Model Instance
//todoList.remove(taksItem);