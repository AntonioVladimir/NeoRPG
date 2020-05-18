function SpritesPaletted(Sdata) {
	this.urlImage = Sdata.image;

	this.imageWidth = parseInt(Sdata.imagewidth);
	this.imageHeight = parseInt(Sdata.imagesheight);

	this.sWidth = parseInt(Sdata.tilewidth);
	this.sHeight = parseInt(Sdata.tileheight);

	this.firstSpriteInOne = parseInt(Sdata.firstgid);

	this.widthIS = this.imageWidth / this.sWidth;
	this.heightIS = this.imageHeight/ this.sHeight;
	this.allSprites = this.widthIS * this.heightIS;

	this.sprites = [];

	for (s = 0; s < this.allSprites; s++) {
		var nowIdInZero = this.firstSpriteInOne - 1 + s;
		this.sprites.push(new Sprite(this.urlImage, nowIdInZero, this.getPossitionIDSprite(nowIdInZero)));
	}
}

SpritesPaletted.prototype.getPossitionIDSprite = function(idSpriteInZero){
	var y = Math.floor(idSpriteInZero / this.widthIS);
	var x = idSpriteInZero % this.widthIS;

	return new Point(x * this.sWidth, y * this.sHeight);
}