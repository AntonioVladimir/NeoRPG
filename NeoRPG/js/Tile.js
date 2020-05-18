function Tile(xInTiles, yInTiles, z, width, heigth, sprite){
	this.rectangle = new Rectangle(xInTiles, yInTiles, width, heigth);
	this.zIndex = z;
	this.sprite = sprite;
	this.idHTML = "x" + xInTiles + "y" + yInTiles + "z" + z;
	this.html = '<div id="' + this.idHTML +'"></div>';
}

Tile.prototype.addStiles = function() {
	if (!document.getElementById(this.idHTML)){
		throw("The Id "+this.idHTML + " do not exist!");
	}

	document.getElementById(this.idHTML).style.position = "absolute";
	document.getElementById(this.idHTML).style.left = (this.rectangle.x * this.rectangle.width) + "px";
	document.getElementById(this.idHTML).style.top = (this.rectangle.y * this.rectangle.heigth) + "px";
	document.getElementById(this.idHTML).style.width = this.rectangle.width + "px";
	document.getElementById(this.idHTML).style.heigth = this.rectangle.heigth + "px";
	document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
	document.getElementById(this.idHTML).style.background = "url('" + this.sprite.urlPageOrigin + "')";

	var x = this.sprite.pageCoord.x;
	var y = this.sprite.pageCoord.y;
	
	document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px" ;
	document.getElementById(this.idHTML).style.backgroundClip = "border-box";
	document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}