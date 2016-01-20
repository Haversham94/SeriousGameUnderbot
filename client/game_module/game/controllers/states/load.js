 var loadState = {
     preload: function () {
         var lvl = document.getElementById("lvl");
         if (lvl) {
             game.load.tilemap('Map', 'assets/images/game_assets/map/world1/lvl' + document.getElementById("lvl").options[document.getElementById("lvl").selectedIndex].value + '.json', null, Phaser.Tilemap.TILED_JSON);
             game.load.image('Wall', 'assets/images/game_assets/tileset/Wall.png');
             game.load.image('Floor', 'assets/images/game_assets/tileset/Floor.png');
             game.load.spritesheet('Bot', 'assets/images/game_assets/sprite/Bot.png', 21, 24);
         }

     },

     create: function () {
         game.state.start('play');
     }
 };
