var readline = require("readline"),
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];

rl.on('line', function(line){
	toDoList.push(line);
	console.log(toDoList);
	rl.prompt();
});