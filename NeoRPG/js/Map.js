function Map(objectJSON) {
	this.position = new Point(0,0);
	this.updatePosition = new Point(0,0);

	this.widthSizeTiles = parseInt(objectJSON.width);
	this.heightSizeTiles = parseInt(objectJSON.height);
	this.widthFromTiles = parseInt(objectJSON.tilewidth);
	this.heightFromTiles = parseInt(objectJSON.tileheight);

	this.SpritesPalettes = [];
	this.startSpritesPalettes(objectJSON.tilesets)

	this.TileLayers = [];

}

Map.prototype.startSpritesPalettes = function(layerData){
	for (i = 0; i <layerData.length; i++) {
		this.SpritesPalettes.push (new SpritePalettes(layerData[i]));
	}
}

Map.prototype.startLayers = function(layerData){
	for (i = 0; i < layerData.length; i++){
		switch(layerData[i].type){
			case "tilelayer":
			this.TileLayers.push(new LayerMapTiles(
				layerData[i], i, this.widthFromTiles, this.SpritePalettes));
				break;
			case "objectgroup":
				break;
		}
	}
}
Map.prototype.startT = function(){
	var widthMPX = this.widthSizeTiles * this.widthFromTiles;
	var heightMPX = this.heightSizeTiles * this*heightFromTiles;

	var html = "";

	for (lt = 0; lt < this.TileLayers.length; lt++){
		for(t = 0; t < this.TileLayers[lt].tiles.length; t++){
			if (this.TileLayers[lt].tiles[t] == null) {
				continue;
			}
			var actualTile = this.TileLayers[ct].tiles[t];
			html += actualTile.html;
		}
	}
	document.getElementById("map").innerHTML = html;

		for (lt = 0; lt < this.TileLayers.length; lt++){
		for(t = 0; t < this.TileLayers[lt].tiles.length; t++){
			if (this.TileLayers[lt].tiles[t] == null) {
				continue;
			}
			var actualTile = this.TileLayers[ct].tiles[t];
			actualTile.applyStyle();

		}
	}

	document.getElementByTagName("body")[0].style.overflow = "hidden";
}
Map.prototype.update = function(){

}

Map.prototype.draw = function(){

}