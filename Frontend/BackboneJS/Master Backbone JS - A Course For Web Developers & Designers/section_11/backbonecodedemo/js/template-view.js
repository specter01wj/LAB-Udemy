/*
var TodoView = Backbone.View.extend({ tagName:'article',id:'view',className:'views',

render: function () {
        var content = '<div> A simple view </div>';
       this.$el.html(content);
    }


});
var todoView = new TodoView();
console.log(todoView.el);
todoView.render();

console.log($(todoView.el).html());

console.log(todoView.$el.html());
*/

var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 
'open', id: 1 });


var TodoView = Backbone.View.extend({ tagName: 'article', id: 'view', 
    className: 'views',
    template: _.template('<h1>Task for today is <%= task %></h1>'),
    render: function () {
        var attributes = this.model.attributes;
        
        this.$el.html(this.template(attributes));
    }
});

var todoView = new TodoView({ model: todoItem });
todoView.render();
console.log(todoView.el);
console.log(todoView.$el.html());