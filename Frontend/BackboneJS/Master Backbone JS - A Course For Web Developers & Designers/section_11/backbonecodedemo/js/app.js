
//{task:'Create BackBone Course',status:'open',id:1}

var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 'open', id: 1 });

console.log(todoItem.get('task'));
todoItem.set({ task: 'Creating BackboneJs Course' });
console.log(todoItem.get('task'));

var TodoView = Backbone.View.extend({
    render: function () {
        var content = '<div>' + this.model.get('task') + '</div>';
        $(this.el).html(content);
    }
});
var todoView = new TodoView({ model: todoItem });
todoView.render();
console.log(todoView.el);

