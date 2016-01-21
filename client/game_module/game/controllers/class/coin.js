var Coin = {
	create: function(x,y) {
		this.sprite = game.add.sprite(x,y,'Coin');
		this.sprite.animations.add('rotate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 20, true);
        this.sprite.animations.play('rotate');
	},
	
	update: function() {
		if(this.sprite.overlap(robot.sprite))
            this.sprite.kill();
	}
};