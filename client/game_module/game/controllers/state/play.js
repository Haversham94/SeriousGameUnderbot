var playState = {
    create: function () {
        map = Object.create(Map);
        map.create();
        var pos = map.map.searchTileIndex(33, 0, false, "Character");

        coins = [];
        for (var y = 0; y < map.map.height; y++)
            for (var x = 0; x < map.map.width; x++) {
                if(map.map.getTile(x, y,"Character",true).index === 36) {
                    coins.push(Object.create(Coin))
                    coins[coins.length - 1].create(x*16, y*16);
                }
            }

        robot = Object.create(Robot);
        robot.posX = pos.left;
        robot.posY = pos.top;
        robot.create();
    },

    update: function () {
        robot.update();
        coins.forEach(function(entry) {
            entry.update();
        });
    },

    restart: function () {
        game.state.start('load');
    }
};