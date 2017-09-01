var TodoItem=Backbone.Model.extend({});

var todoItem=new TodoItem({task:'Create BackBone Course',status:'open',id:1});

/*
todoItem.on('event-name',function() {
  alert('event took place');
});

todoItem.trigger('event-name');
*/
function changeHandler()
 { 
    console.log('Model has changed'); 
 }

 todoItem.on('change',changeHandler);
 //todoItem.set({ task: 'Changing Task Attribute' });
 //todoItem.set({ task: 'Changing Task Attribute' },{silent:true});
 todoItem.off('change', changeHandler);
 todoItem.set({ task: 'Changing Task Attribute' });