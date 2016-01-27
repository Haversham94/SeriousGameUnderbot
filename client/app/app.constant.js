'use strict';
var constantApp = angular.module('constantApp', []);

constantApp.constant('CONSTANT', {
    appConfig: {
        userRoles: ['guest', 'user', 'admin']
    },
    ENDPOINT: 'http://localhost:9000/api'
});
