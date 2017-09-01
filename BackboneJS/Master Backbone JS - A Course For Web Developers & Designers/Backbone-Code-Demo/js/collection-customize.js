var TodoItem = Backbone.Model.extend({});
//Creating Collections

//var TodoList = Backbone.Collection.extend({
// model:TodoItem,
// url:'collection-data.php/collection',
// comparator:'status'
//});

var TodoList = Backbone.Collection.extend({
 model:TodoItem,
 url:'collection-data.php/collection',
 comparator:function(firstItem,secondItem){
     return firstItem.get('status') < secondItem.get('status');
 },
  completedCount:function(){
   return this.where({status:'Closed'}).length;  
 }
});

var todoList=new TodoList();
todoList.fetch({
    data: { page: 2 },
    success: function (response, xhr) {
        console.log("Inside success");
        console.log(todoList.length);

        todoList.each(function (todoItem) {
            console.log(todoItem);
        });
       console.log(todoList.completedCount());
        
    },
    error: function (errorResponse) {
        console.log(errorResponse)
    }
});