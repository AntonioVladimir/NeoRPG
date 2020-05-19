var start ={
	starters: [
		statesEngine.start(),
		keyboard.start(),
		gamepad.start(),
		mainLoop.iterate()
	],
	startGame: function( ){
		start.chainStarts(start.starters.shift());
	},
	chainStarts: function(starter) {
		if(starter) {
			starter(() => start.chainStarts(starters.shift()));
		}
	}
};

document.addEventListener('DOMContentLoaded', function() {
	start.startGame();
}, false);
//DOM mean document object model