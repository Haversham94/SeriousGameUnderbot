var Map = {
    create: function () {
        this.map = game.add.tilemap('Map');
        this.map.addTilesetImage('Wall', 'Wall');
        this.map.addTilesetImage('Floor', 'Floor');

        this.ground = this.map.createLayer('Floor');
        this.wall = this.map.createLayer('Wall');
        this.collision = this.map.createLayer('Collision');

        this.ground.resizeWorld();

        //First we choose which tiles will collide
        this.map.setCollision(22, true, this.collision);
        this.collision.visible = false;
    },
    getMap: function () {

        return this.map;
    }
};
