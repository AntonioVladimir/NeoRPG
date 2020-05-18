var mainLoop = {
	runId: null,
	lastRecord: 0,														//atributes
	ups: 0,
	fps: 0,
	iterate: function(temporalRecord){
		mainLoop.runId = window.requestAnimationFrame(mainLoop.iterate);//Callback

		mainLoop.update(temporalRecord);
		mainLoop.draw();

		if(temporalRecord - mainLoop.lastRecord > 999) {
			mainLoop.lastRecord = temporalRecord;
			console.log("UPS: " + mainLoop.ups + "   FPS: " + mainLoop.fps);
			mainLoop.ups = 0;
			mainLoop.fps = 0;
		}
	},
	stop: function(){

	},																	//functions 
	update: function(temporalRecord){
		keyboard.reload();
		gamepad.update();
		mainLoop.ups++;
	},
	draw: function(temporalRecord){
		mainLoop.fps++;
	}
};
