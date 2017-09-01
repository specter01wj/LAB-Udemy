var readline = require("readline"),
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];

rl.on('line', function(line){
	var words = line.split(' ');
	var command = words.shift();

	if(command === 'ls' ){
		console.log(toDoList);
	}

	if(command === 'add' ){
		var item = words.join(' ');
		toDoList.push(item);
	}

	//console.log(words);
	rl.prompt();
});