var elButton = document.querySelector('.button');
var elBox = document.querySelector('.box')
var colorbox = document.querySelector('#box')

var rec = new webkitSpeechRecognition();

rec.lang = 'en-US';

rec.onend = function () {
	console.log('==== Aloqa tugadi ====');
};

rec.onresult = function (evt) {
	var command = evt.results[0][0].transcript;

    var newP = document.createElement('p');

    newP.textContent = command;

    elBox.appendChild(newP);

	if(command == "red"){
		colorbox.className = "red"
	}else if(command == "yellow"){
		colorbox.className = "yellow"
	}else{
		command.className = "default"
	}
};

elButton.addEventListener('click', function () {
	console.log('==== Aloqa boshlandi ====');
	rec.start();
});
