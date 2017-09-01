var TodoItem = Backbone.Model.extend({});

var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 
'open', id: 1 });

//Mode - 1 - Defining the Template as string
/*
var TodoView = Backbone.View.extend({     tagName: 'article',     id: 'view',     className: 'views',
    template: _.template('<h1>Task for today is <%= task %></h1>'),
    render: function () {
        var attributes = this.model.attributes;
        this.$el.html(this.template(attributes));
    }
});
*/

//Mode - 2 - Taking the Template outside of the js
/*
var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',
    //template: _.template($('#taskTemplate').html()),
    template: '#taskTemplate',
    render: function () {
       var attributes = this.model.attributes;
       var template = _.template($(this.template).html());
       this.$el.html(template(attributes));
    }
});
*/

// Mode 4 - Precompiled Version
var TodoView = Backbone.View.extend({
    tagName: 'article',
    id: 'view',
    className: 'views',
    render: function () {
        var attributes = this.model.attributes;
        this.$el.html(window["JST"]["templates/template-view.tpl"](attributes));
    }
});

var todoView = new TodoView({ model: todoItem,el:$("#container") });
todoView.render();