'use strict';
var gameApp = angular.module('gameApp', []);
gameApp.config(function ($stateProvider) {
    $stateProvider
        .state('game', {
            url: '/game',
            templateUrl: 'game_module/game/views/index.html',
            authenticate: true
                //controller: 'GameController'
        });
});
