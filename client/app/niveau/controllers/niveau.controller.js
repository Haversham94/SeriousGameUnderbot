'use strict';
niveauApp.controller('NiveauController', function ($scope, $state, $stateParams) {

    $scope.niveauId = $stateParams.niveauId;
    $scope.goiframe = function () {

        $state.go('goiframe');

    };
    $scope.startgameP = function () {

        $state.go('startgameP');

    };

    //TODO : A definir du cote du serveur et renvoyer le contenu sous forme JSON
    /*
       var fs = require('fs');
    fs.realpath(__dirname, function(err, path) {
        if (err) {
            console.log(err);
         return;
        }
        console.log('Path is : ' + path);
    });
    fs.readdir(__dirname, function(err, files) {
        if (err) return;
        files.forEach(function(f) {
            console.log('Files: ' + f);
        });
    });


    */


});
