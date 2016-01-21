var Map = {
	create: function() {
		this.map = game.add.tilemap('Map');
		this.map.addTilesetImage('Wall', 'Wall');
		this.map.addTilesetImage('Floor', 'Floor');
		this.map.addTilesetImage('Decor0', 'Decor0');
		this.map.addTilesetImage('Decor1', 'Decor1');
		this.map.addTilesetImage('Hill0', 'Hill0');
		this.map.addTilesetImage('Hill1', 'Hill1');
		this.map.addTilesetImage('Pit0', 'Pit0');
		this.map.addTilesetImage('Pit1', 'Pit1');
		this.map.addTilesetImage('Door0', 'Door0');
		this.map.addTilesetImage('Door1', 'Door1');
		this.map.addTilesetImage('Map1', 'Map1');
		this.map.addTilesetImage('Ground0', 'Ground0');
		this.map.addTilesetImage('Effect0', 'Effect0');

		this.ground = this.map.createLayer('Floor');
		this.wall = this.map.createLayer('Wall');
		this.collision = this.map.createLayer('Collision');
		this.decor = this.map.createLayer('Decor');
		this.hill = this.map.createLayer('Hill');
		this.pit = this.map.createLayer('Pit');
		this.door = this.map.createLayer('Door');
		this.effect = this.map.createLayer('Effect');

		this.ground.resizeWorld();
		
		//First we choose which tiles will collide
		this.map.setCollision(22, true, this.collision);
		this.collision.visible = false;
	}
};