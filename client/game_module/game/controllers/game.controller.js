'use strict';
gameApp.controller('GameController', function ($scope) {

    $scope.aceLoaded = function (_editor) {
        // Options
        //_editor.setReadOnly(true);

    };

    $scope.aceChanged = function (e) {
		robot.move('up', 5);
		robot.move('left', 7);
    };
});
