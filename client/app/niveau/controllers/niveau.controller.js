'use strict';
niveauApp.controller('NiveauController', function ($scope, $state, $stateParams) {

    $scope.niveauId = $stateParams.niveauId;
    $scope.goiframe = function () {

        $state.go('goiframe');

    };
     $scope.startgameP = function () {

        $state.go('startgameP');

    };

});
