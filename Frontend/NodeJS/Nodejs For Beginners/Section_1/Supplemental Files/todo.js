var readline = require("readline"),
	rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("--> ");
rl.prompt();

var toDoList = [];


var commands = {
	ls:function() {
		console.log(toDoList);
	},
	add:function(item) {
		toDoList.push(item);
	},
	rm:function(item) {
		var newList = [];
		for(var i = 0; i < toDoList.length; i++){
			if(toDoList[i] !== item){
				newList.push(toDoList[i]);
			}
		}
		toDoList = newList;
	}
};


rl.on('line',function(line) {
	var words = line.split(' '),
		command = words.shift(),
		argsStr = words.join(' ');

	commands[command](argsStr);

	//console.log(words);

	// toDoList.push(line);
	// console.log(toDoList);
	rl.prompt();
});