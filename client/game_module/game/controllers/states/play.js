 var playState = {
     map: null,
     robot: null,

     create: function () {

         this.map = Object.create(Map);
         this.map.create();
         var pos = this.map.map.searchTileIndex(33, 0, false, "Character");

         this.robot = Object.create(Robot);
         this.robot.posX = pos.left;
         this.robot.posY = pos.top;
         this.robot.create();
     },

     update: function () {
         this.robot.update();
     },

     restart: function () {
         game.state.start('load');
     }
 };
