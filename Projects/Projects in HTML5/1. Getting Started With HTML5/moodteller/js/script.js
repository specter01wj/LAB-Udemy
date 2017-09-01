function showMood(){
	var name = document.getElementById('name').value;
	var mood = document.getElementById('mood').value;
	var face;
	
	if(!name || !mood){
		alert("Invalid Input!");
	}
	
	if(mood == 'happy' || mood == 'Happy'){
		face = ":)";
	} else if(mood == 'sad' || mood == 'Sad'){
		face = ":(";
	} else{
		face = ":|";
	}
	
	var moodString = name + " is " + mood + " today! " + face;
	
	var holder =  document.getElementById("holder");
	
	holder.innerHTML = moodString;
	
}

function clearMood(){
	document.getElementById('moodForm').reset();
	var holder = document.getElementById('holder');
	holder.innerHTML = "";
	
}