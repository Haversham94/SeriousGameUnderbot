'use strict';
//@author : ~~|Rodolphe AGUIDISSOU|~~

/*MAIN MODULE OF THE PROJECT
We load ALL dependances of front end modules that we use 
and all the different sub-modules(eg : adminApp , accountApp) 
*/
var sguApp = angular.module('seriousGameUnderbotApp', [
    'mainApp',
    'accountApp',
    'authApp',
    'gameApp',
    'adminApp',
    'constantApp',
    'niveauApp',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router',
    'ui.gravatar',
    'ui.bootstrap',
    'validation.match'

]);


sguApp.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    // redirect to '/' while accessing incorrect url  
        .otherwise('/');

    /*  configure html5 to get links working 
      If we don't do this, URLs will be url.com/#/home rather than 
      url.com/home  */
    //check angularjs documentation for more explanation
    $locationProvider.html5Mode(true);
});
