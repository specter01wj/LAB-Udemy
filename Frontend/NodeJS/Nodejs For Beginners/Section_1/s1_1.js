var readline = require("readline"),
	rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt("--> ");
rl.prompt();

rl.on('line', function(line){
	console.log("you said", line);
	rl.prompt();
});