'use strict';

adminApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/admin");
    
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/admin/views/admin.html',
            controller: 'AdminController',
            authenticate: 'admin'
        })
        .state('adduser', {
            url: '/adduser',
            templateUrl: 'app/admin/views/adduser.html',
            controller: 'AdminController',
            authenticate: 'admin'
        })
        .state('addusers', {
            url: '/addusers',
            templateUrl: 'app/admin/views/addusers.html',
            controller: 'AdminController',
            authenticate: 'admin'
        })
    
     .state('admin.addusers', {
            url: '/addusers',
            templateUrl: 'app/admin/views/addusers.html',
            
        })
       .state('admin.adduser', {
            url: '/adduser',
            templateUrl: 'app/admin/views/adduser.html',
            
        })
    .state('admin.afficherusers', {
            url: '/afficherusers',
            templateUrl: 'app/admin/views/afficherusers.html',
            
        })
   .state('admin.afficherstats', {
            url: '/afficherstats',
            templateUrl: 'app/admin/views/afficherstats.html',
            
        })
    
});

