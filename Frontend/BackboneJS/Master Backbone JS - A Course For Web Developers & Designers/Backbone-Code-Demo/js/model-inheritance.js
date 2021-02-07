var TodoItem = Backbone.Model.extend({
    type: function () {
        console.log("Vanilla TodoItem");
    }
});

var CourseItems = TodoItem.extend({
    type: function () {
        TodoItem.prototype.type.apply(this);
        console.log("CourseItem TodoItem");
    }
});


var courseItem = new CourseItems();
courseItem.type();