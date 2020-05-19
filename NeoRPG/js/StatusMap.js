function StatusMap(statusID){
	var that = this;
	this.mapOK = false;
	this.map = null;
	ajax.fileLoad("maps/forest.json" , function(objectJSON){
		that.map = new Map(objectJSON);
		that.mapOK = true;
		console.log("OKE MAPA");
	});
}

StatusMap.prototype.update = function(){
	if(!this.mapOK){
		return;
	}
	this.map.update();
}

StatusMap.prototype.draw = function(){
	if(!this.mapOK){
		return;
	}
	this.map.draw();
}
