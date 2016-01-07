'use strict';

accountApp.controller('SettingsController', function (Auth, $scope) {
    //start-non-standard
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard

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
