'use strict';

angular.module('seriousGameUnderbotApp')
    .directive('navbar', () => ({
        templateUrl: 'components/navbar/navbar.html',
        restrict: 'E',
        controller: 'NavbarController'
    }));
