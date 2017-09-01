var TodoView = Backbone.View.extend({ tagName:'article',id:'view',className:'views',

render: function () {
        var content = '<div> A simple view </div>';
        $(this.el).html(content);
    }


});
var todoView = new TodoView();
console.log(todoView.el);
todoView.render();

console.log($(todoView.el).html());

console.log(todoView.$el.html());