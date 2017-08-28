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

// Keep it up!
// Hang in there!

var messages = ["Hang in there!", "Keep it up!", "You can do it!", "Keep those gears turning!"]

window.onload = function() {
	document.getElementById("moral-support").innerHTML = messages[Math.floor(Math.random() * messages.length)];
}