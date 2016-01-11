'use strict';
mainApp.controller('MainController', function ($scope, $state, Auth, $controller) {


    $controller('LoginControllerCommon', {
        $scope: $scope,
        $state: $state,
        Auth: Auth

    });

});
