function showMood(){
	name = document.getElementById('name').value;
	mood = document.getElementById('mood').value;
	
	if(!name || !mood){
		alert("Please fill in all fields");
		return false;
	}
	
	if(mood == "happy"){
		face = " :)";
	} else if(mood == "sad"){
		face = " :(";
	} else {
		face = " :|";
	}
	
	moodString = name+" is "+mood+" today "+face;
	
	holder = document.getElementById('holder');
	
	holder.innerHTML = moodString;
}

function clearMood(){
	document.getElementById("moodForm").reset();
	holder = document.getElementById('holder');
	holder.innerHTML = "";
}
