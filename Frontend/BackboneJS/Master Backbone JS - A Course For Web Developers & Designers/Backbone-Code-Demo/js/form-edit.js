var TodoItem = Backbone.Model.extend({
    urlRoot: 'itemlist.php',
    parse: function (response) {
        response = response[0];
        response.task = response.desc;
        delete response.desc;
        return response;
    }
});

//We can build forms using Backbone Views
var ItemForm = Backbone.View.extend({
    template: _.template('<form>' +
    '<input name=task value="<%= task %>" />' +
    '<button>Save</button></form>'),
    events:{
        'submit':'save'
    },
    save:function(e){
        e.preventDefault();
        var task_desc=this.$("input[name=task]").val();
        this.model.save({task:task_desc});
    },
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

//var todoItem = new TodoItem({ task: "Working with Backbone.JS", status: "Open", id:"1" });
var todoItem=new TodoItem({id:2});
todoItem.fetch({
     success: function (response, xhr) {
        console.log("Inside success");
        console.log(response);

        var itemForm = new ItemForm({ model: todoItem });
        $("#container").html(itemForm.render().el);
    },
    error: function (errorResponse) {
        console.log(errorResponse)
    }
});
