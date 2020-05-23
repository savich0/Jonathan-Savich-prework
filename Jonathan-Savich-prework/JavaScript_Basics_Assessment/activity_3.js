// JavaScript Document
var names = ['John','Ben','Jen'];
var size = 3; 

for(var i=0; i<size; i++) {
	
	names[i] = prompt('enter name' + (i+1));
}

console.log(names);