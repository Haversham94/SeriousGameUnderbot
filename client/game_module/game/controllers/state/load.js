var loadState= {
	preload: function() {
		game.load.tilemap('Map', '../../../../assets/images/game_assets/map/world1/' + document.getElementById("lvl").options[document.getElementById("lvl").selectedIndex].value + '.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('Wall', '../../../../assets/images/game_assets/tileset/Wall.png');
		game.load.image('Floor', '../../../../assets/images/game_assets/tileset/Floor.png');
		game.load.image('Decor0', '../../../../assets/images/game_assets/tileset/Decor0.png');
		game.load.image('Decor1', '../../../../assets/images/game_assets/tileset/Decor1.png');
		game.load.image('Hill0', '../../../../assets/images/game_assets/tileset/Hill0.png');
		game.load.image('Hill1', '../../../../assets/images/game_assets/tileset/Hill1.png');
		game.load.image('Pit0', '../../../../assets/images/game_assets/tileset/Pit0.png');
		game.load.image('Pit1', '../../../../assets/images/game_assets/tileset/Pit1.png');
		game.load.image('Door0', '../../../../assets/images/game_assets/tileset/Door0.png');
		game.load.image('Door1', '../../../../assets/images/game_assets/tileset/Door1.png');
		game.load.image('Effect0', '../../../../assets/images/game_assets/tileset/Effect0.png');
		game.load.image('Map1', '../../../../assets/images/game_assets/tileset/Map1.png');
		game.load.image('Ground0', '../../../../assets/images/game_assets/tileset/Ground0.png');
		game.load.spritesheet('Bot', '../../../../assets/images/game_assets/sprite/Bot.png',21,24);
		game.load.spritesheet('Coin', '../../../../assets/images/game_assets/sprite/coin.png',16,16);
	},
	
	create: function() {
		game.state.start('play');
	}
};