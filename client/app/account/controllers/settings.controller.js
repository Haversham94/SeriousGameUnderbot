'use strict';
//@author : generate and maintained by ~~|Rodolphe AGUIDISSOU|~~

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

    //  ##########################################################
    //  # Function that allow the user to change their password  #
    //  ##########################################################
    $scope.changePassword = function (form) {
        $scope.submitted = true; //password change form submitted 

        if (form.$valid) {

            //calling server -> password change service 
            Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                .then(() => {
                    $scope.message = 'Password successfully changed.';
                })
                .catch(() => { // possible errors catching 
                    form.password.$setValidity('mongoose', false);
                    $scope.errors.other = 'Incorrect password';
                    $scope.message = '';
                });
        }
    }

});
