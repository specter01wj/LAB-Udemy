//Earlier version
var TodoItemModel = Backbone.Model.extend({});
var TodoView = Backbone.View.extend({});

//New version
var Application = {

    Models: {},
    Views: {},
    Collections: {},
    start: function () {
        $("a[data-attr]").click(function (e) {
            e.preventDefault();
            Backbone.history.navigate(e.target.pathname, { trigger: true });
        });

        Backbone.history.start({pushState:true});
    }

}
//Then we can access it as
Application.Models.TodoItem = Backbone.Model.extend({});


//Reference Classes with the namespace
var todoItem = new Application.Models.TodoItem({});

$(function () {
    Application.start();
})


