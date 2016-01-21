var bootState = {
	create: function() {
		//Physics        
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');
	}
};