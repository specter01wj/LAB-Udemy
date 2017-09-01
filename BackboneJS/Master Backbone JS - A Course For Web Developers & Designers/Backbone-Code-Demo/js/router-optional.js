var TodoItem = Backbone.Model.extend({});

var taksItem=new TodoItem({task:"Task Four",status:"Open",id:"4"});

var TodoView = Backbone.View.extend({
    template: _.template('<span class="<%=status %>"><input type="checkbox" />Task for today is <a href="#items/<%=id%>"><%= task %></a></span>'),
    render: function () {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
        return this;
    },
    initialize:function() {
        this.model.on('show',this.show,this);
        this.model.on('hide',this.remove,this);
    },
    show: function () {
        this.$el.show();
    },
    remove:function()
    {
        this.$el.hide();
    }
   
});

var todoView = new TodoView({ model: taksItem });

//Creating Collections
var TodoList = Backbone.Collection.extend({
    model: TodoItem
});

var todoList=new TodoList([
  new TodoItem({task:"Task One",status:"Open",id:"1"}),
  new TodoItem({task:"Task Two",status:"Open",id:"2"}),
  new TodoItem({task:"Task Three",status:"Open",id:"3"})
]);
todoList.add(taksItem,{at:2});


var TodoListView = Backbone.View.extend({
    render: function () {
        this.collection.forEach(this.addItem, this);
    },
    addItem: function (todoItem) {
        var todoView = new TodoView({ model: todoItem });
        this.$el.append(todoView.render().el);
    },
    manageDisplay: function (todoItem) {
        todoItem.trigger('hide');
    },
    showItem: function (id) {
        var model = this.collection.get(id);
        this.collection.forEach(this.manageDisplay, this);
        model.trigger('show');
    }
});

var TodoRouter = Backbone.Router.extend({
    //root route
    routes: {
        "": "index",
        //"items/:id": "display",
        //'search/:q': 'search',
        //'search/:q/p:pg': 'search'
        'search/:q(/p:pg)(/)': 'search',
        "*path": "Error404"
    },
    search: function (query,page) {
        page = page || 0;
        query = decodeURIComponent(query);
        console.log(query);
        console.log(page);
    },
    Error404: function (path) {
        console.log("404 Not Found");
    },
    index: function () {
        this.todoListView = new TodoListView({ collection: todoList });
        this.todoListView.render();
        $("#container").html(this.todoListView.el);
    },
    display: function (id) {
        this.todoListView.showItem(id);
    },
    initialize: function (options) {
        this.route(/^items\/(\d+)$/, 'display');
        this.todoList = options.todoList;
        this.todoListView = new TodoListView({ collection: todoList });
        this.todoListView.render();
        $("#container").html(this.todoListView.el);
    },
    start: function () {
        Backbone.history.start();
    }
});
var App = new TodoRouter({ todoList: todoList });
App.start();
App.navigate("search/Task One/p2/", { trigger: true });
//App.navigate("PageNotFound", { trigger: true });

