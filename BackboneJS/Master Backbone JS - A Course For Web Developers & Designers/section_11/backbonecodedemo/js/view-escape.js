var user = "SkillBakery.com";

var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ 
    task: 'Create BackBone Course', 
    status: 'open', id: 1 
});

var TodoView = Backbone.View.extend({
    id: 'view',
    className: 'views',
    //template: _.template('<span class="<%= status %>"><input type="checkbox" />Task for today is <%= task %></span>'),
    template: _.template('<span class="<%= model.escape("status") %>"><input type="checkbox" />Task for today is <%= model.escape("task") %></span>'),
    render: function () {

        //var attributes = this.model.attributes;
        //this.$el.html(this.template(attributes));
        this.$el.html(this.template({model:this.model}));
    }
});

var todoView = new TodoView({ 
 model: todoItem,
 el:$("#container")
});
todoItem.set({ task: "<script src='js/xss.js'>" });
todoView.render();
