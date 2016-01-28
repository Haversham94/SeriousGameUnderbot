'use strict';

var niveauApp = angular.module('niveauApp', ['commonApp',
                                             'authApp',
                                             'ui.router'
                                                     ]);


niveauApp.config(function ($stateProvider) {
    $stateProvider
        .state('niveau', {
            url: '/niveau',
            templateUrl: 'app/niveau/views/index.html',
            controller: 'NiveauController',
            authenticate: true
        })

    .state('GoiframeClick', {
        url: '/niveau',
        templateUrl: 'app/niveau/views/niveauiframe.html',
        controller: 'NiveauController',
        authenticate: true
    });
    // permet l'acces à la page niveauiframe directement 

    $stateProvider
        .state('niveaudetail', {
            url: '/niveau/:niveauId',
            templateUrl: 'app/niveau/views/detail.html',
            controller: 'NiveauController'

        })
        .state('startGamefromProfilClick', {
            url: '/startgame',
            templateUrl: 'app/account/views/play.html',
            controller: 'SettingsController',

        })

    .state('GoiframefromProfilClick', {
url:'/niveau',
        templateUrl: 'game_module/game/views/index.html',
        controller: 'NiveauController',
        authenticate: true
    });
});
