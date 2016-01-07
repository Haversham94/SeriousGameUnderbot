'use strict';

var sguApp = angular.module('seriousGameUnderbotApp', [
    'mainApp',
    'accountApp',
    'authApp',
    'adminApp',
    'seriousGameUnderbotApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.bootstrap',
    'validation.match'
]);
sguApp.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
        .otherwise('/');
    $locationProvider.html5Mode(true);
});
