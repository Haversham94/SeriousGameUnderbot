var Robot = {
	posX: 0,
	posY: 0,
	destX: 0,
	destY: 0,
	moving: 'none',
	create: function() {
		this.sprite = game.add.sprite(this.posX,this.posY,'Bot');
		game.physics.arcade.enable(this.sprite);
		
		this.sprite.body.bounce.x = 0;
		this.sprite.body.bounce.y = 0;
		
		this.sprite.body.setSize(16,16,3,8);
		//Animation0
		this.sprite.animations.add('down', [0, 1, 2, 3], 10, true);
		this.sprite.animations.add('up', [4, 5, 6, 7], 10, true);
		this.sprite.animations.add('left', [8, 9, 10, 11], 10, true);
		this.sprite.animations.add('right', [12, 13, 14, 15], 10, true);
		
		this.cursors = game.input.keyboard.createCursorKeys();
	},
	
	update: function() {
		//Make the sprite collide with the ground layer
    	game.physics.arcade.collide(this.sprite, map.collision);
 
		
		if (this.cursors.up.isDown){
			this.move('up');
		} else if (this.cursors.down.isDown){
			this.move('down');
		} else {
			this.move('none');
		}
		if (this.cursors.left.isDown){
			this.move('left');
		} else if (this.cursors.right.isDown){
			this.move('right');
		} else {
			this.move('none');
		}
	},
	
	move : function(direct,distance) {
		
		if (distance === undefined) {
			distance = 1;
		}
		
		this.posX = this.sprite.body.x;
		this.posY = this.sprite.body.y;
		
		if (this.moving == 'none') {
			switch(direct) {
				case 'up' :
					this.destY = this.sprite.body.y - 16*distance;
					break;
				case 'down' :
					this.destY = this.sprite.body.y + 16*distance;
					break;
				case 'right' :
					this.destX = this.sprite.body.x + 16*distance;
					break;
				case 'left' :
					this.destX = this.sprite.body.x - 16*distance;
					break;
				default:
			}
			this.moving = direct;
		} else {
			switch(this.moving) {
				case 'up' :
					if (this.posY > this.destY) {
						this.sprite.body.velocity.y = -60;
						this.sprite.animations.play('up');
					} else {
						this.posY = this.destY;
						this.moving = 'none';
						this.sprite.body.velocity.y = 0;
						this.sprite.animations.stop();
					}
					break;
				case 'down' :
					if (this.posY < this.destY) {
						this.sprite.body.velocity.y = 60;
						this.sprite.animations.play('down');
					} else {
						this.posY = this.destY;
						this.moving = 'none';
						this.sprite.body.velocity.y = 0;
						this.sprite.animations.stop();
					}
					break;
				case 'right' :
					if (this.posX < this.destX) {
						this.sprite.body.velocity.x = 60;
						this.sprite.animations.play('right');
					} else {
						this.posX = this.destX;
						this.moving = 'none';
						this.sprite.body.velocity.x = 0;
						this.sprite.animations.stop();
					}
					break;
				case 'left' :
					if (this.posX > this.destX) {
						this.sprite.body.velocity.x = -60;
						this.sprite.animations.play('left');
					} else {
						this.posX = this.destX;
						this.moving = 'none';
						this.sprite.body.velocity.x = 0;
						this.sprite.animations.stop();
					}
					break;
				default:
					this.sprite.body.velocity.x = 0;
					this.sprite.body.velocity.y = 0;
					this.sprite.animations.stop();
			}
			
			if(this.sprite.body.blocked.up == true || this.sprite.body.blocked.down == true || this.sprite.body.blocked.right == true || this.sprite.body.blocked.left == true){
				this.moving = 'none';
				this.sprite.body.velocity.x = 0;
				this.sprite.body.velocity.y = 0;
				this.sprite.animations.stop();
			}
		}
	}
};