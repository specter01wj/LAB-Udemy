var TodoItem = Backbone.Model.extend({});

var taksItem=new TodoItem({task:"Task Four",status:"Open",id:"4"});

var TodoView = Backbone.View.extend({
    initialize:function() {
     this.model.on('hide',this.remove,this);
    },
    remove: function () {
        this.$el.remove();
    },
    template: _.template('<span class="<%=status %>"><input type="checkbox" />Task for today is <%= task %></span>'),
    render: function () {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
        return this;
    }
});

var todoView = new TodoView({ model: taksItem });

//Creating Collections
var TodoList = Backbone.Collection.extend({
     model:TodoItem
});

var todoList=new TodoList([
  new TodoItem({task:"Task One",status:"Open",id:"1"}),
  new TodoItem({task:"Task Two",status:"Open",id:"2"}),
  new TodoItem({task:"Task Three",status:"Open",id:"3"})
]);
todoList.add(taksItem,{at:2});

var TodoListView = Backbone.View.extend({
   initialize:function(){
        this.collection.on('add',this.addItem,this);
        this.collection.on('remove',this.hideItem,this);
    },
    render:function(){
        this.collection.forEach(this.addItem,this);
    },
    addItem: function(todoItem) {
        var todoView = new TodoView({model:todoItem});
        this.$el.append(todoView.render().el);
   },
   hideItem:function(model){
       model.trigger('hide');
    }
  
});

var todoListView = new TodoListView({collection:todoList});
todoListView.render();
$("#container").html(todoListView.el);