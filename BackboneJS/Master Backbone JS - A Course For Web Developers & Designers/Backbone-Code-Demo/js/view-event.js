var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ 
    task: 'Create BackBone Course', 
    status: 'open', id: 1 });

//<event> <selector>":"<method>"
var TodoView = Backbone.View.extend({ tagName: 'article', id: 'view', 
events:{"click h1":"onClick", "mouseover h1":"onmouseover"},
onClick:function()
{
   alert("Article Clicked");  
},
onmouseover:function()
{
   console.log("Hover");  
},
className: 'views',
    template: _.template('<h1>Task for today is <%= task %></h1>'),
    render: function () {
        var attributes = this.model.attributes;
        
        this.$el.html(this.template(attributes));
    }


});



var todoView = new TodoView({ model: todoItem });
todoView.render();
$("#container").html(todoView.el);