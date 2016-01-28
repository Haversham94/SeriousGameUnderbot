var game;

function start() {
	if (game != undefined)
		game.destroy();
	
	game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, create: create, update: update });
}

function preload() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
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
}

var robot;
var coin;
var map;
var action;
var current;

function create() {
	map = Object.create(Map);
	map.create();
	var pos = map.map.searchTileIndex(33, 0, false, "Character");

	coins = [];
	for (var y = 0; y < map.map.height; y++)
		for (var x = 0; x < map.map.width; x++) {
			if(map.map.getTile(x, y,"Character",true).index === 36) {
				coins.push(Object.create(Coin))
				coins[coins.length - 1].create(x*16, y*16);
			}
		}

	robot = Object.create(Robot);
	robot.posX = pos.left;
	robot.posY = pos.top;
	robot.create();
	
	action = [];
	current = -1;
}

function update() {
	//Make the sprite collide with the ground layer
	game.physics.arcade.collide(robot.sprite, map.collision);
		
	if(current > -1 && current < action.length)
		switch(action[current].name) {
			case 'move':
				robot.moveAction(action[current].param1, action[current].param2);
				break;
		}
	
	coins.forEach(function(entry) {
		entry.update();
	});
}