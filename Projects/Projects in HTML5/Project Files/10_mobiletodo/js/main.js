//Set todo list variable
var todoList = JSON.parse(localStorage.getItem('todos'));

$(document).ready(function(){
//Set counter
var i = 0;
//Check for todos
if(localStorage.getItem('todos') != null){
	//Loop through and output li items
	$.each(todoList,function(key, value){
		$('#todos').prepend('<li id="task-'+i+'"><a id="todo_link" href="#edit" data-todo_name ="'+value.todo_name+'" data-todo_date="'+value.todo_date+'">'+value.todo_name+' <span>'+value.todo_date+'</span></a></li>');
		i++;
	});
	//Refresh
	$('#todos').listview('refresh');
}

//Add Todo
$('#add_form').submit(function(){
	//Get submitted values
	var todo_name = $('#todo_name').val();
	var todo_date = $('#todo_date').val();
	
	//Simple field validation
	if(todo_name == ''){
		alert('Please give the todo a name');
	} else if(todo_date == ''){
		alert('Please add a date');
	} else {
		var todos = JSON.parse(localStorage.getItem('todos'));
		//Check todos
		if(todos == null){
			todos = [];
		}
		//Create array with new todo
		var new_todo = {
			"todo_name": todo_name,
			"todo_date": todo_date
		}
		todos.push(new_todo);
		localStorage.setItem('todos',JSON.stringify(todos));
	}
});

	//Edit Todo
	$('#edit_form').submit(function(){
		currentTodoName = localStorage.getItem('currentTodoName');
		currentTodoDate = localStorage.getItem('currentTodoDate');
		//Loop through todos
		for(var i=0; i < todoList.length; i++){
			if(todoList[i].todo_name == currentTodoName){
				todoList.splice(i,1);
			}
			localStorage.setItem('todos',JSON.stringify(todoList));
		}	
		
		//Create a new todo
		var todo_name_edit = $('#todo_name_edit').val();
		var todo_date_edit = $('#todo_date_edit').val();
		
		var todos = JSON.parse(localStorage.getItem('todos'));
		
		//Create array with new values
		var update_todo = {
			"todo_name": todo_name_edit,
			"todo_date": todo_date_edit
		};
		
		todos.push(update_todo);
		localStorage.setItem('todos',JSON.stringify(todos));
	});

	//Delete Todo
	$('#edit_form').on('click','#delete',function(){
		currentTodoName = localStorage.getItem('currentTodoName');
		currentTodoDate = localStorage.getItem('currentTodoDate');
		//Loop through todos
		for(var i=0; i < todoList.length; i++){
			if(todoList[i].todo_name == currentTodoName){
				todoList.splice(i,1);
			}
			localStorage.setItem('todos',JSON.stringify(todoList));
		}	
		//Close and go home
		$.mobile.changePage($('#home'),'pop');
	});

	$('#todos').on('click','#todo_link',function(){
		localStorage.setItem('currentTodoName',$(this).data('todo_name'));
		localStorage.setItem('currentTodoDate',$(this).data('todo_date'));
	});
	
	//Insert current data into edit form
	$(document).on('pageshow','#edit',function(){
		currentTodoName = localStorage.getItem('currentTodoName');
		currentTodoDate = localStorage.getItem('currentTodoDate');
		$('#edit_form input[name=todo_name_edit]',this).val(currentTodoName);
		$('#edit_form input[name=todo_date_edit]',this).val(currentTodoDate);
	});
	
	$(document).on('pageshow','#home',function(){
		window.location.reload();
	});

	//Clear Todos
	$('#clear_btn').click(function(){
		localStorage.clear();
	});
	

});