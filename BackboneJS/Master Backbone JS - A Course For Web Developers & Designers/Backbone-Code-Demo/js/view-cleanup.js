var TodoItem = Backbone.Model.extend({
    urlRoot:"http://localhost:8059/",
    changeStatus: function () {
        if (this.get('status') === 'open') {
            this.set({ status: 'complete' });
        }
        else {
            this.set({ status: 'open' });
        }

        //this.save();
    }
});

var todoItem = new TodoItem({ 
    task: 'Create BackBone Course', 
    status: 'open', id: 1 
});


var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',
    initialize: function () {
        //this.model.on('change', this.render, this);  //the third argument binds render context to the view
        //this.model.on('destroy', this.remove, this);
        this.listenTo(this.model, 'change', this.render);
        //when we do this.model.on - The model hold reference to the view. 
        //Instead of that we can make the view listen to the model by using listenTo then we can simply remove the view 
        //without destroying the model
        
    },
    template: _.template('<span class="<%=status %>"><input type="checkbox" />Task for today is <%= task %></span>'),
    events: { "change input": "changeStatus" },
    changeStatus: function () {
        this.model.changeStatus();
    },
    remove: function () {

        this.$el.remove();
    },
    render: function () {
        var attributes = this.model.attributes;

        this.$el.html(this.template(attributes));
    }
});

var todoView = new TodoView({ model: todoItem });
todoView.render();
$("#container").html(todoView.el);

