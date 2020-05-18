function Sprite(url, idOnZero, pageCoord) {
	var urlElements = url.split("/");
	this.urlPageOrigin = "images/" + urlElements[urlElements.length - 1];
	this.idOnZero = idOnZero;
	this.idOnOne = idOnZero + 1;
	this.pageCoord = pageCoord;
}
