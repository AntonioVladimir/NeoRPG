document.addEventListener('DOMContentLoaded', function() {
	start.startGame();
}, false);

var start ={
	startGame: function(){
		console.log("That works...");
		ajax.fileUpload("maps/forest.json");
		keyboard.start();
		dimensions.start();
		gamepad.start();
		start.reloadTiles();
		mainLoop.iterate();

	},
	reloadTiles: function(){
		document.getElementById("game").innerHTML = "";
		for(var y = 0; y < dimensions.getVerticalTiles(); y++){
			for (var x = 0; x < dimensions.getHorizontalTiles(); x++) {
				var r = new Rectangle(x * dimensions.sideTiles, y * dimensions.sideTiles, 
					dimensions.sideTiles, dimensions.sideTiles);
			}
		}	
	}	
};
//DOM mean document object model