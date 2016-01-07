'use strict';
accountApp.controller('SignupController', function (Auth, $scope, $state) {
    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard


    $scope.register = function (form) {

        $scope.submitted = true;

        if (form.$valid) {
            Auth.createUser({
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                })
                .then(() => {
                    // Account created, redirect to home
                    this.$state.go('main');
                })
                .catch(err => {
                    err = err.data;
                    this.errors = {};

                    // Update validity of form fields that match the mongoose errors
                    angular.forEach(err.errors, (error, field) => {
                        form[field].$setValidity('mongoose', false);
                        this.errors[field] = error.message;
                    });
                });
        }
    }

});
