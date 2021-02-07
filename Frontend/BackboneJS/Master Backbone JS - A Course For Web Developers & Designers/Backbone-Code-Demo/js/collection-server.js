var TodoItem = Backbone.Model.extend({});
//Creating Collections
var TodoList = Backbone.Collection.extend({
 model:TodoItem,
 url:'collection-data.php/collection'

});

var todoList=new TodoList();
todoList.fetch({
    success: function (response, xhr) {
        console.log("Inside success");
        console.log(response);
        console.log(todoList.length);

        console.log(todoList.at(0));
    },
    error: function (errorResponse) {
        console.log(errorResponse)
    }
});