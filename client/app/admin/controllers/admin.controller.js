'use strict';
adminApp.controller('AdminController', function ($scope, User, $state, Auth, notify, $http, AdminAppService) {


    // Use the User $resource to fetch all users
    $scope.users = User.query();

    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard

    //object that reprensent users from csvFile
    $scope.csvResult = {};


    //  #######################################################
    //  # Function that parse csv file (library PapaParse)    #
    //  #######################################################
    $scope.onFileChange = function (fileInput) {
        console.log(fileInput.files[0], 'changed');
        // Parse local CSV file
        Papa.parse(fileInput.files[0], {
            header: true,
            delimiter: ';',
            dynamicTyping: true,
            comments: '#',
            complete: function (results) {
                //CSV File parsing complete

                //now we generate password for all users of the CSV File
                for (var i = 0; i < results.data.length; i++) {

                    //adding new field password for each user of the CSV file 
                    results.data[i].password = generatePassword(6);

                }

                //store the users and generated password to object csvResult 
                $scope.csvResult = results.data;

                //console.log('Finished:', results.data);

            }
        });


    };




    //======== FOR INFORMATION : lines below was used to parse manually csv File before using function above===

    /*$scope.readMethod = "readAsBinaryString";

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

        //arrayToJson($scope.data);
        AdminAppService.createUsers.call(arrayToJson($scope.data));

    };*/

    /*function arrayToJson(array) {
            var result = [];
            for (var i = 1; i < array.length; i++) {

                var json = {};


                var header = array[0];
                var user = array[i];

                  json.first_name = user[0];
     
                for (var j = 0; j < header.length; j++) {

                    json[header[j]] = user[j];


                }
                
                result.push(json);

            }

            return result;
            //console.log(result);


        };*/


    /* $scope.onReaded = function (e, file) {

         $scope.fileData = e.target.result;
         processData($scope.fileData);


     };*/
    //=====================================================================================================


    //  #################################
    //  # Function that delete user     #
    //  #################################

    $scope.delete = function (user) {
        user.$remove();
        $scope.users.splice($scope.users.indexOf(user), 1);
    };



    //  ################################################
    //  # Function that generate Password for User     #
    //  ################################################
    function generatePassword(plength) {
        var keylist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var password = '';


        for (var i = 0; i < plength; i++) {

            password += keylist.charAt(Math.floor(Math.random() * keylist.length))
        }
        return password;

    };


    //  #################################################################
    //  # Function that Allow Admin to add User (Fill out a Form)       #
    //  #################################################################   

    $scope.registerUser = function (form) {

        $scope.submitted = true; //form submitted

        if (form.$valid) {
            //if form valid -> generate password for User
            $scope.user.password = generatePassword(6);

            //create user : calling server -> calling approriate service with parameter name, email, password 
            Auth.createUser({
                    name: $scope.user.name,
                    email: $scope.user.email,
                    password: $scope.user.password

                })
                .then(function (user) {
                    //creating user without error : go to admin viem and notify 
                    $state.go('addusers');
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



    //  #################################################################
    //  # Function that Allow Admin to add Users (Import CSV file)      #
    //  #################################################################   

    // TODO : Generate errors on the server side and raised when calling appropriate service to create Users
    $scope.registerUserByFileImport = function () {
        AdminAppService.createUsers.call($scope.csvResult)
            .$promise.then(function () {
                //creating user without error : go to admin viem and notify 
                $state.go('admin.afficherusers');
                notify('Utilisateurs ajoutés avec succes');
            });


    };

    //Function link adduser click with appropriate view
    $scope.addUser = function () {

        $state.go('adduser');

    };


    //Function link addusers click with appropriate view
    $scope.addUserByImport = function () {
        $state.go('addusers');
    };
    $scope.Retour = function () {
        $state.go('admin');
    };

});
