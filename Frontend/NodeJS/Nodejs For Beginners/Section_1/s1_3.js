var readline = require("readline"),
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];

rl.on('line', function(line){
	var words = line.split(' ');
	var command = words[0];
	console.log("the command is: " + command);
	console.log(words);
	rl.prompt();
});