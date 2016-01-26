'use strict';
//@author : ~~|Rodolphe AGUIDISSOU|~~

/*MAIN MODULE OF THE PROJECT
We load all dependances of front end module that we use 
and all the different sub-modules
*/
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
    'ui.gravatar',
    'ui.bootstrap',
    'validation.match'
]);
sguApp.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
    // redirect to '/' while accessing incorrect url  
        .otherwise('/');

    /*  configure html5 to get links working 
      If you don't do this, you URLs will be url.com/#/home rather than 
      url.com/home  */
    //check angularjs documentation for more explanation
    $locationProvider.html5Mode(true);
});
