'use strict';

var authApp = angular.module('authApp', [
  'constantApp',
  'seriousGameUnderbotApp.util',
  'ngCookies',
  'ui.router'
]);

//interceptor regarde toutes les requetes qui passent dans l'application et rajoute les infos necessaires dans les header 

// inetercepte aussi les erreurs du serveur aussi
authApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
