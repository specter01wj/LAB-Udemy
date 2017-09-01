var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ 
    task: 'Create BackBone Course', 
    status: 'open', id: 1 
});

var TodoView = Backbone.View.extend({
    id: 'view',
    className: 'views',
    template: _.template('<span class="<%=status %>"><input type="checkbox" />Task for today is <%= task %></span>'),
    render: function () {
        var attributes = this.model.attributes;

        this.$el.html(this.template(attributes));
    }
});

var todoView = new TodoView({ model: todoItem,el:$("#container") });
todoView.render();
//$("#container").html(todoView.el);