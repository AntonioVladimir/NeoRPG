<?php

$date = new DateTime();

$JSfonts = array(	
	'js/Rectangle.js',
	'js/Sprite.js',
	'js/Tile.js',
	'js/TileLayers.js',
	'js/SpritesPalette.js',
	'js/stateList.js',
	'js/ajax.js',
	'js/StatusMap.js',
	'js/statesEngine.js',
	'js/Point.js',
	'js/Map.js',
	'js/keyboard.js',
	'js/gamepad.js',
	'js/dimensions.js',
	'js/mainLoop.js',
	'js/start.js'
);

foreach ($JSfonts as $font) {
	echo '<script src=" ' . $font . '?' . $date -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}
?>