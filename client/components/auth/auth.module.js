'use strict';

var authApp = angular.module('authApp', [
  'constantApp',
  'seriousGameUnderbotApp.util',
  'ngCookies',
  'ui.router'
]);

authApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
});
