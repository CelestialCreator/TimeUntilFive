// Set the date we're counting down to
var currentDate = new Date();
var countDownTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 17).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

	// Get todays date and time
	var now = new Date().getTime();
	
	// Find the distance between now an the count down date
	var distance = countDownTime - now;

	// If the count down is over, update the page
	if (distance <= 0) {
		clearInterval(x);
		updatePage();
		return;
	}
	
	// Time calculations for days, hours, minutes and seconds
	//var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = minutes;
	document.getElementById("seconds").innerHTML = seconds;
}, 1000);