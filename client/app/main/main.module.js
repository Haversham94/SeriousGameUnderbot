'use strict';

var mainApp = angular.module('mainApp', ['ui.router', 'commonApp']);

mainApp.config(function ($stateProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
});
