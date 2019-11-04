console.log("My first js work");

function storygenerator(){
	var finalstory = document.getElementById('finalstory');
	var name = document.getElementById("name").value;
	var age=document.getElementById('age').value;
	var number = document.getElementById('number').value;
	var food = document.getElementById('food').value;
	var animal = document.getElementById('animal').value;
	var object = document.getElementById('object').value;
	var color = document.getElementById('color').value;
	var mood = document.getElementById('mood').value;
	var place = document.getElementById('place').value;
	var adjective = document.getElementById('adjective').value;

	finalstory.innerHTML =name+" go to the "+place+ " with a "+mood+" mood. "+name+" met a "+age+" years old "+animal+" on the half way. "+animal+" give "+name+ " "+number+ " "+color+" "+food+" made of "+ object +". What a happy day.";
}
    var generate=document.getElementById('generate');
    generate.addEventListener('click',storygenerator);