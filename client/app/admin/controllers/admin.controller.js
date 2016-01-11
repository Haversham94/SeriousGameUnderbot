'use strict';
adminApp.controller('AdminController', function ($scope, User, $state, Auth, notify, $http) {


    // Use the User $resource to fetch all users
    $scope.users = User.query();

    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard

    $scope.readMethod = "readAsBinaryString";

    function processData(allText) {

        // split content based on new line
        var allTextLines = allText.split(/\r\n|\n/);

        var headers = allTextLines[0].split(',');
        var lines = [];

        for (var i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            var data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                var tarr = [];
                for (var j = 0; j < headers.length; j++) {
                    tarr.push(data[j]);
                }
                lines.push(tarr);
            }
        }
        $scope.data = lines;

        console.log($scope.data);
    };


    $scope.onReaded = function (e, file) {

        $scope.fileData = e.target.result;
        processData($scope.fileData);


    };

    $scope.delete = function (user) {
        user.$remove();
        $scope.users.splice($scope.users.indexOf(user), 1);
    };



    //
    function generatePassword(plength) {
        var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var password = '';


        for (var i = 0; i < plength; i++) {

            password += keylist.charAt(Math.floor(Math.random() * keylist.length))
        }
        return password;

    };

    $scope.registerUser = function (form) {

        $scope.submitted = true;

        if (form.$valid) {
            $scope.user.password = generatePassword(6);
            console.log($scope.user.password);
            Auth.createUser({
                    name: $scope.user.name,
                    email: $scope.user.email,
                    password: $scope.user.password

                })
                .then(function (user) {
                    //$rootScope.registeredUser = $scope.user.name;
                    $state.go('admin')
                    notify($scope.user.name + ' ajouté');
                })
                .catch(err => {
                    err = err.data;
                    $scope.errors = {};

                    // Update validity of form fields that match the mongoose errors
                    angular.forEach(err.errors, (error, field) => {
                        form[field].$setValidity('mongoose', false);
                        $scope.errors[field] = error.message;
                    });
                });
        }
    };




    $scope.registerUserByFileImport = function (form) {





    };

    $scope.addUser = function () {

        $state.go('adduser');

    };

    $scope.addUserByImport = function () {
        $state.go('addusers');
    };

});
