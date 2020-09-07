
var allPersons = document.getElementsByClassName("person");
var allHeads = document.getElementsByClassName("personHeadImg");
var allPersonsNames = ["Samson", "Andrey", "Carina", "Maxim", "Beniamin"];

opacity7();
allPersons[2].style.opacity = '1';

for(var i=0; i< allPersons.length; i++){
	allPersons[i].addEventListener("mouseenter", opacity1, false);
	allPersons[i].addEventListener("mouseenter", turnHeads, false);
}

for(var i=0; i< allPersons.length; i++){
	allPersons[i].addEventListener("mouseleave", function(){
	event.target.style.opacity = '0.5';
	allPersons[2].style.opacity = '1';
	}, false);
}

for(var i=0; i< allPersons.length; i++){
	allPersons[i].addEventListener("click", launch, false);
}

for(var i=0; i< allHeads.length; i++){
	
}

function turnHeads(event){
	console.log(event.currentTarget + "\n\n");
	console.log(event.currentTarget);

	console.log(event.currentTarget.querySelector('.personHeadImg') + "\n\n");
	var currentPerson = event.currentTarget.querySelector('.personName').innerHTML;
	console.log(currentPerson);

	var currentPersonPosition =0;

	event.currentTarget.querySelector('.personHeadImg').setAttribute("src", `img/${currentPerson}1.png`);
	console.log(allPersonsNames[2]);
	for(var i=0; i<allPersonsNames.length; i++){
		if (allPersonsNames[i]==currentPerson){
			currentPersonPosition = i
		}
	}

	for(var i=0; i<allPersonsNames.length; i++){
		if(i < currentPersonPosition){
			allHeads[i].setAttribute("src", `img/${allPersonsNames[i]}3.png`);
		}

		if(i > currentPersonPosition){
			allHeads[i].setAttribute("src", `img/${allPersonsNames[i]}2.png`);
		}
	}


	console.log(currentPersonPosition);

}


function opacity1(event) {
	opacity7();
	event.target.style.opacity = 'inherit';

}

function opacity7() {
	for(var i=0; i< allPersons.length; i++){
	allPersons[i].style.opacity = '0.5';
}
}

function launch(event){
	event.currentTarget.style.animation = "fly 3.5s forwards";
	event.currentTarget.querySelector('.dataContainer').style.display = "none";
	event.currentTarget.querySelector('.fire').style.display = "block";
	console.log(event.currentTarget);
	var name = event.currentTarget.querySelector('.personName').innerHTML;
	console.log(name);

	setTimeout(function() { 
		window.location.href = `pages/${name}.html`;
  }, 1000);
	
	
}