var dimensions = {
	width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
	sideTiles:250,
	scale:1,
	start: function() {
		window.addEventListener("resize", function(e){
			this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
			console.log("width: "+ this.width + "   height: "+ this.height);
			start.reloadTiles();
		});
	},
	getHorizontalTiles: function(){
		var finalSide = this.sideTiles * this.scale;
		return Math.ceil((this.width - finalSide) / finalSide);
	},
	getVerticalTiles: function(){
		var finalSide = this.sideTiles * this.scale;
		return Math.ceil((this.height - finalSide) / finalSide);
	},
	getTotalTiles: function(){
		return this.getHorizontalTiles() * this.getVerticalTiles();
	}
}