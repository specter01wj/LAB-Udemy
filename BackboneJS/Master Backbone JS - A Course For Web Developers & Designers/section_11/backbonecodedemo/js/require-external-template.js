//http://requirejs.org/docs/download.html
require(['js/backbone', 'text!templates/template-view.html'],
    function (app, mainView) {
        // the contents of the mainView file will be
        // loaded into mainView for usage.
        var compiled_template = _.template( mainView );
        var TodoItem = Backbone.Model.extend({});
        var todoItem = new TodoItem({ task: 'Create BackBone Course', status: 'open', id: 1 });
        var TodoView = Backbone.View.extend({
            tagName: 'article',
            id: 'view',
            className: 'views',
            template:compiled_template,
            render: function () {
                var attributes = this.model.attributes;
                this.$el.html(this.template(attributes));
            }
        });

        var todoView = new TodoView({ model: todoItem,el:$("#container") });
        todoView.render();
    }
);


