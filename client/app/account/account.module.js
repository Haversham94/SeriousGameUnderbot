'use strict';
//@author : generate and maintained by ~~|Rodolphe AGUIDISSOU|~~


var accountApp = angular.module('accountApp', ['commonApp']);
//module configuration with differents states(routes) 
accountApp.config(function ($stateProvider) {
    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'app/account/views/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout?referrer', //referrer -> current user to disconnect
            referrer: 'main',
            template: '',
            controller: function ($state, Auth) {
                var referrer = $state.params.referrer ||
                    $state.current.referrer ||
                    'main';
                Auth.logout(); //calling logout function 
                $state.go(referrer); //go to main page after disconnection
            }
        })

    .state('signup', {
            url: '/signup',
            templateUrl: 'app/account/views/signup.html',
            controller: 'SignupController'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'app/account/views/settings.html',
            controller: 'SettingsController',
            authenticate: true
        })

    .state('profil', {
        url: '/profil',
        templateUrl: 'app/account/views/profil.html',
        controller: 'SettingsController',
        authenticate: true
    })

    .state('goiframe', {
url:'/niveau',
        templateUrl: 'app/niveau/views/index.html',
        controller: 'NiveauController',
        authenticate:true
    });

});


/*block to set up listeners for routing events or unauthenticated requests
function that validates that we have an authenticated user every time that we change our route
*/

//definition of $stateChangeStart ==> /client/componenents/auth/router.decorator.js
accountApp.run(function ($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, current) {
        if (next.name === 'logout' && current && current.name && !current.authenticate) {
            next.referrer = current.name;
        }
    });
});
