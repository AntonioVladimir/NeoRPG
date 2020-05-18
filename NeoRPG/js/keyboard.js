var keyboard = {
	keys: new Array(),
	start: function() {
		document.onkeydown = keyboard.saveKey;
	},
	saveKey: function(e) {
		keyboard.keys.push(e.key);
		console.log(e.key);
	},
	pressedKey: function(keyCode){
		return (keyboard.keys.indexOf(keyCode) !== -1) ? true : false;
	},
	reload: function() {
		keyboard.keys = new Array();
	}
};