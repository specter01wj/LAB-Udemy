
$( document ).ready(function() {

  function get_todos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');

    if( todos_str !== null ) {
      todos = JSON.parse(todos_str);
    }
    return todos;
  }

  function add() {
    var task = $('#task').val();

    if( task !== '' ) {
      var todos = get_todos();
      todos.push(task);
      localStorage.setItem('todo', JSON.stringify(todos));
      $('#task').val('');
      show();
    }

    return false;
  }

  function clearDefault(a) {
    if( a.defaultValue == a.value ) {
      a.value = '';
    }
  }

  function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
  }

  function show() {
    var todos = get_todos();
    var html = '<ul>';

    $.each(todos, function(key, val) {
      html += '<li>' + todos[key] + '<button class="remove" id="' + key + '">Del</button></li>';
    });

    html += '</ul>';

    $('#todos').html(html);

    var buttons = $('.remove');

    $.each(buttons, function(key, val) {
      $(this).on('click', remove);
    });

  }

  $('#add').on('click', add);

  show();

});



