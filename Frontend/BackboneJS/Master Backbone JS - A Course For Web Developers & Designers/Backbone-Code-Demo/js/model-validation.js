var TodoItem = Backbone.Model.extend({
    validate: function (attributes) {
        if (!attributes.task) {
            return "Task is mandatory";
        }
    }
});

var todoItem = new TodoItem();
console.log(todoItem.isValid());
console.log(todoItem.validationError);

todoItem.set({ task: "Model Validation" });
console.log(todoItem.isValid());

var err = todoItem.validationError;
console.log(err);