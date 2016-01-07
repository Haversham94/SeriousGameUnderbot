'use strict';
mainApp.controller('MainController', function ($scope, $mdDialog, $state, Auth, $controller) {


    $controller('LoginControllerCommon', {
        $scope: $scope,
        $state: $state,
        Auth: Auth

    });

    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard


    $scope.showLogin = function (ev) {

        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'app/main/views/popups/login.popup.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
            .then(function (obj) {

                $scope.user.email = obj.email;
                $scope.user.password = obj.password;
                $scope.login(obj.form);

            });
    };


});

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
        console.log('Fonction ctrl hide');
    };

    $scope.cancel = function () {
        $mdDialog.hide();
        console.log('Fonction ctrl cancel');
    };

    $scope.doLogin = function (form) {
        var obj = {
            email: form.email.$modelValue,
            password: form.password.$modelValue,
            form: form
        };
        $mdDialog.hide(obj);

    };


}
