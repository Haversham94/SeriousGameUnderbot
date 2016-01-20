// Build the game object
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');


// Add our game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('play', playState);


// Start the game
game.state.start('boot');
