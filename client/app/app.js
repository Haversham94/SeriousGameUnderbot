'use strict';

var sguApp = angular.module('seriousGameUnderbotApp', [
    'mainApp',
    'accountApp',
    'authApp',
    'adminApp',
    'niveauApp',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'gameApp',
    'ui.bootstrap',
    'validation.match'
]);
sguApp.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');
    $locationProvider.html5Mode(true);
});
