var playState = {
	map:null,
	robot:null,
	create: function() {
		map = Object.create(Map);
		map.create();
		var pos = map.map.searchTileIndex(33, 0, false, "Character");
		
		robot = Object.create(Robot);
		robot.posX = pos.left;
		robot.posY = pos.top;
		robot.create();
	},

	update: function() {
		robot.update();
	},
	
	restart: function () {
		game.state.start('load');
	}
};