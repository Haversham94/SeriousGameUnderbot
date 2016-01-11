'use strict';

adminApp.config(function ($stateProvider) {
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
        });
});
