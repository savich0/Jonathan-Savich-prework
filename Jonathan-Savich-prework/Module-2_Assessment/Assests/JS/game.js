var word = [
["M", "R", "R", "O", "B", "O", "T",],
  ["E","L","L","I","O","T"],
  ["N","E","W","Y","O","R","K"],
  ["D","A","R","K","A","R","M","Y"],
  ["D","A","R","L","E","N","E"],
  ["F","S","O","C","I","E","T","Y"],
  
]
var random = Math.floor((Math.random()*(word.length-1))); 

var letters = word[random]; 
var rate = new Array(letters.length);
var life = 0;


for (var i = 0; i < rate.length; i++){
	rate[i] = "_ ";
}


function printRate(){
	for (var i = 0; i < rate.length; i++){
	var ratefeld = document.getElementById("ratefeld");
	var letter = document.createTextNode(rate[i]);
	ratefeld.appendChild(letter);
	}
}


var pruefeZeichen = function(){
	var f = document.rateformular; 
	var b = f.elements["ratezeichen"]; 
	var z = b.value; 
	z = z.toUpperCase();
	for (var i = 0; i < letters.length; i++){
		if(letters[i] === z){
			rate[i] = z + " ";
			var hit = true;
		}
	b.value = "";
	}
	
	
	var ratefeld = document.getElementById("ratefeld");
	ratefeld.innerHTML=""; 
	printRate();
	
	
	if(!hit){
		var go = document.getElementById("go");
		var letter = document.createTextNode(" " + z);
		gerateneBuchstaben.appendChild(letter); 
		life++;
		var hangman = document.getElementById("hangman");
	}
	
	
	var finished = true;
	for (var i = 0; i < rate.length; i++){
		if(rate[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		window.alert("You hacked in");
	}
	
	
	if(life === 6){
		window.alert("you've been caught");
	}
}

function init(){
	printRate();
}

window.onload = init;