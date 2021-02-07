var TodoItem = Backbone.Model.extend({
    urlRoot: 'itemlist.php',
    parse: function (response) {
        response = response[0];
        response.task = response.desc;
        delete response.desc;
        return response;
    },
    //method can be read,create,update and delete
    sync: function (method, model, options) {
        if (method === "read") {
            Backbone.sync(method, model, options);
        }
        else {
            console.log("You can not " + method + " model");
        }
    }
});
var todoItem=new TodoItem({id:2});
todoItem.fetch({
     success: function (response, xhr) {
        console.log("Inside success");
        console.log(todoItem);
        console.log(todoItem.get('task'));
    },
    error: function (errorResponse) {
        console.log(errorResponse)
    }
});
todoItem.save();
