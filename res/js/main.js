var moralSupportMessages = ["Hang in there!", "Keep it up!", "You can do it!", "Keep those gears turning!"]
var celebrationMessages = ["Yay!", "Good job!", "Keep up the good work!"]
var endedTitle = "The work day has ended!";

window.onload = function() {
	updatePage();
}

function updatePage() {
	var messageArray = moralSupportMessages;

	var title = document.getElementById("title");
	var timer = document.getElementById("timer");
	var moralSupport = document.getElementById("moral-support");

	if(isPastFive()) {
		title.innerHTML = endedTitle;
		messageArray = celebrationMessages;
	}

	moralSupport.innerHTML = messageArray[Math.floor(Math.random() * messageArray.length)];
}

function isPastFive() {
	var now = new Date();
	var five = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 17).getTime();
	return five - now <= 0;
}