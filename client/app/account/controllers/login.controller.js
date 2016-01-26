'use strict';
//@author : generate and maintained by ~~|Rodolphe AGUIDISSOU|~~
accountApp.controller('LoginController', function ($scope, $state, Auth, $controller) {

    $controller('LoginControllerCommon', {
        $scope: $scope,
        $state: $state,
        Auth: Auth
    });
});
