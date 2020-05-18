function SpritesPaletted(Sdata) {
	this.urlImage = Sdata.image;

	this.imageWidth = parseInt(Sdata.imagewidth);
	this.imageHeight = parseInt(Sdata.imagesheight);

	this.sWidth = parseInt(Sdata.tilewidth);
	this.sHeight = parseInt(Sdata.tileheight);

	this.firstSpriteOnOne = parseInt(Sdata.firstgid);

	this.widthIS = this.imageWidth / this.sWidth;
	this.heightIS = this.imageHeight/ this.sHeight;
	this.allSprites = this.widthIS * this.heightIS;

	this.sprites = [];

	for (s = 0; s < this.allSprites; s++) {
		var nowIdInZero = this.firstSpriteOnOne - 1 + s;
		this.sprites.push(new Sprite(this.urlImage, nowIdInZero, this.getPossitionIDSprite(nowIdInZero)));
	}
}

SpritesPaletted.prototype.getPossitionIDSprite = function(idSpriteOnZero){
	var y = Math.floor(idSpriteOnZero / this.widthIS);
	var x = idSpriteOnZero % this.widthIS;

	return new Point(x * this.sWidth, y * this.sHeight);
}