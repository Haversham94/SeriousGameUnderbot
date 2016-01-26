'use strict';

accountApp.controller('SettingsController', function (Auth,$state, $scope) {
    //start-non-standard
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard
$scope.settings = function () {

        $state.go('settings');

    };
    $scope.goiframe2 = function () {

        $state.go('goiframe2');

    };
    $scope.Retour2 = function () {

        $state.go('Retour2');

    };
 $scope.startgame = function () {

        $state.go('startgame');

    };

    $scope.changePassword = function (form) {
        $scope.submitted = true;

        if (form.$valid) {
            Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                .then(() => {
                    $scope.message = 'Password successfully changed.';
                })
                .catch(() => {
                    form.password.$setValidity('mongoose', false);
                    $scope.errors.other = 'Incorrect password';
                    $scope.message = '';
                });
        }
    }

});
