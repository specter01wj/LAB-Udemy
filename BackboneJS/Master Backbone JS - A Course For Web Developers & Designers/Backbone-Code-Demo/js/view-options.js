var user = "SkillBakery.com";

var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ 
    task: 'Create BackBone Course', 
    status: 'open', id: 1 
});

var TodoView = Backbone.View.extend({
    id: 'view',
    className: 'views',
    template: _.template('<span class="<%=status %>"><input type="checkbox" />Task for today is <%= task %></span>'),
    initialize: function (options) {
        this.model.on('change:task', this.change, this)
    },
    render: function () {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
    },
    change: function (model,value,options){
        if (options.update) {
            console.log("Event update successful");
        }
        console.log("Change event fired");
    }
});

var todoView = new TodoView({ 
 model: todoItem,
 el:$("#container")
});
todoItem.set({ task: 'Work on View Events' },{update:true});
todoView.render();
