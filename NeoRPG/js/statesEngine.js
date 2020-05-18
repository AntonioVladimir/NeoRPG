var statesEngine = {
	stateNow: null,
	start: function() {

	},
	changeState: function(newState){
		switch(newState) {
			case stateList.LOAD:
			 	
			 	break;
			case stateList.START_MENU:

				break;
			case stateList.MAP:

				break;
			case stateList.LEVEL:

				break;
		}
	},
	update: function(){
		statesEngine.stateNow.update();
	},
	draw: function(){
		statesEngine.stateNow.draw();
	}
}