'use strict';

var accountApp = angular.module('accountApp', ['commonApp']);

accountApp.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/account/views/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout?referrer',
            referrer: 'main',
            template: '',
            controller: function ($state, Auth) {
                var referrer = $state.params.referrer ||
                    $state.current.referrer ||
                    'main';
                Auth.logout();
                $state.go(referrer);
            }
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'app/account/views/signup.html',
            controller: 'SignupController',
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/account/views/settings.html',
            controller: 'SettingsController',
            authenticate: true
        });
});

accountApp.run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current) {
        if (next.name === 'logout' && current && current.name && !current.authenticate) {
            next.referrer = current.name;
        }
    });
});
