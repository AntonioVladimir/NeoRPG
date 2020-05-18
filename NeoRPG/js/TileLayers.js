function TileLayers(layerData, zIndex, widthFromTiles, heightFromTiles, SpritePalette){
	this.widthFromTiles = parseInt(layerData.width);
	this.heightFromTiles = parseInt(layerData.height);
	this.x = parseInt(layerData.x);
	this.y = parseInt(layerData.y);
	this.z = zIndex;
	this.tiles = [];

	for (y = 0; y < this.heigthFromTiles; y++){
		for (x = 0; x < this.widthFromTiles; x++){
			var idNowSpriteOnOne = layerData.data[x + y * this.widthFromTiles];
			if (idNowSpriteOnOne == 0) {
				this.tiles.push(null);
			} else {
				var spriteNew = this.findSpriteID(idNowSpriteOnOne - 1, SpritePalettes);

				this.tiles.push(new Tile(x, y ,zIndex, widthFromTiles, heightFromTiles, spriteNew));
			}
		}
	}	
}

TileLayers.prototype.findSpriteID = function(idSpriteOnZero, SpritePalettes) {
	for (s = 0; s < SpritePalettes.length; s++){
		if (idSpriteOnZero >= SpritePalettes[s].firstSpriteOnOne - 1 && 
			idSpriteOnZero < SpritePalettes[s].allSprites + SpritePalettes[s].firstSpriteOnOne + 1) {
			return SpritePalettes[s].sprites[Math.abs(SpritePalettes[s].firstSpriteOnOne - 1 - idSpriteOnZero)];
		}
	}
	throw "The id " +idSpriteOnZero + " do not exist!"
}