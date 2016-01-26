'use strict';
accountApp.controller('LoginController', function ($scope, $state, Auth, $controller) {

    $controller('LoginControllerCommon', {
        $scope: $scope,
        $state: $state,
        Auth: Auth
        
    });

  


});
