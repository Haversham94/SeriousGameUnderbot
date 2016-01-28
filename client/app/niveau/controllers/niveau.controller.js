'use strict';
niveauApp.controller('NiveauController', function ($scope, $state, $stateParams) {

    $scope.niveauId = $stateParams.niveauId;
      $scope.goiframeClick = function () {

        $state.go('GoiframeClick');

    };
    $scope.startGamefromProfilClick = function () {

        $state.go('startGamefromProfilClick');

    };


});
