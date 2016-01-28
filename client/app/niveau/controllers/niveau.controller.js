'use strict';
niveauApp.controller('NiveauController', function ($scope, $state, $stateParams) {

    $scope.niveauId = $stateParams.niveauId;
      $scope.goiframeClick = function () {

        $state.go('goIframe');

    };
    $scope.startGamefromProfilClick = function () {

        $state.go('game');

    };


});
