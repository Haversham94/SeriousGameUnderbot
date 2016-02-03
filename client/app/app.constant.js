'use strict';
var constantApp = angular.module('constantApp', []);

constantApp.constant('CONSTANT', {
    appConfig: {
        userRoles: ['guest', 'user', 'admin']
    },
    //Point d'entrée du serveur
    ENDPOINT: 'http://localhost:9000/api'
});
