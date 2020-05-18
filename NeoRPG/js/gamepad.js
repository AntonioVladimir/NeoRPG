var gamepad = {
	object: null,
	availableEvents: 'ongamepadconnected' in window,
	connect: false,
	start: function(){
		if(gamepad.availableEvents) {
			window.addEventListener("gamepadconnected", gamepad.connect);
			window.addEventListener("gamepaddisconnected", gamepad.disconnect);		
		}else{
			gamepad.update();
		}
	},
	connect: function(e) {
		gamepad.object = event.gamepad;
		gamepad.identify();
	},
	disconnect: function(e) {
		console.log("Gamepad disconected from the index %d: %s.", e.gamepad.index, e.gamepad.id);
	},
	update: function() {
		if(!gamepad.availableEvents){
			gamepads = null;

			try{
				gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
				gamepads.object = gamepads[0];
				if(!gamepad.connect){
					gamepad.connect = true;
					gamepad.identify();
				}
			} catch(e){
				console.log(e.message);
			}
		}

		if (!gamepad.object) {
			return;
		}

		if (gamepad.buttonPressed(gamepad.object.buttons[0])){
			console.log("Gamepad: A")
		}
	},
	buttonPressed: function(button){
		if (typeof(button) == "object") {
			return button.pressed;
		}
		return button == 1.0;
	},
	identify: function(){
		console.log("Gamepad connected from the index %d: %s. %d buttons, %d ejes.",				
		gamepad.object.index, gamepad.object.id, gamepad.object.buttons.length, gamepad.object.axes.length);
	}
};