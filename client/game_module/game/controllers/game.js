var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv');

var robot;
var coin;
var map;

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('play',playState);

game.state.start('boot');