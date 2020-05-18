<?php

$date = new DateTime();

$JSfonts = array(
	'js/stateList.js',
	'js/Rectangle.js',
	'js/Point.js',
	'js/Sprite.js',
	'js/SpritesPalette.js',
	'js/Tile.js',
	'js/TileLayers.js',
	'js/ajax.js',
	'js/keyboard.js',
	'js/gamepad.js',
	'js/mainLoop.js',
	'js/dimensions.js',
	'js/start.js'
);

foreach ($JSfonts as $font) {
	echo '<script src=" ' . $font . '?' . $date -> getTimestamp() . '"></script>';
	echo nl2br("\n");
}
?>