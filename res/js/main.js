/*
 * Setup any JS plugins here.
 * This function calls itself when the file loads.
 */
(function() {
	'use strict'

	// By not specifying a min-width, styles from higher breakpoints apply to
	// lower ones.
	skel.breakpoints({
	    xlarge: '(max-width: 1680px)',
	    large:  '(max-width: 1280px)',
		medium: '(max-width: 980px)',
	    small:  '(max-width: 736px)',
	    xsmall: '(max-width: 480px)'
	});
})();

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
		moralSupport.className += " celebration";
		messageArray = celebrationMessages;
	}

	moralSupport.innerHTML = messageArray[Math.floor(Math.random() * messageArray.length)];
}

function isPastFive() {
	var now = new Date();
	var five = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 17).getTime();
	return five - now <= 0;
}