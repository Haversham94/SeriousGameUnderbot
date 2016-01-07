'use strict';

adminApp.config(function ($stateProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: 'app/admin/views/admin.html',
            controller: 'AdminController',
            controllerAs: 'admin',
            authenticate: 'admin'
        });
});
