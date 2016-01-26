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
        });

    $stateProvider
        .state('niveaudetail', {
            url: '/niveau/:niveauId',
            templateUrl: 'app/niveau/views/detail.html',
            controller: 'NiveauController'

        });
});
