var loadState= {
	preload: function() {
		game.load.tilemap('Map', '../../../views/assets/map/world1/lvl' + document.getElementById("lvl").options[document.getElementById("lvl").selectedIndex].value + '.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('Wall', '../../../views/assets/tileset/Wall.png');
		game.load.image('Floor', '../../../views/assets/tileset/Floor.png');
		game.load.spritesheet('Bot', '../../../views/assets/sprite/Bot.png',21,24);
	},
	
	create: function() {
		game.state.start('play');
	}
};