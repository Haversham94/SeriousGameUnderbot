'use strict';

var authApp = angular.module('authApp', [
  'seriousGameUnderbotApp.constants',
  'seriousGameUnderbotApp.util',
  'ngCookies',
  'ui.router'
]);

authApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
