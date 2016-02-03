'use strict';
niveauApp.controller('NiveauController', function ($scope, $state, $stateParams, NiveauAppService) {

    $scope.niveauId = $stateParams.niveauId;

    $scope.goiframeClick = function () {


        $state.go('goIframe');

    };

    $scope.loadLevels = function () {
        NiveauAppService.getLevels.call({
                path: "."
            })
            .$promise.then(function (res) {

                console.log(res);

            });


    };
    $scope.loadLevels();


    $scope.startGamefromProfilClick = function () {

        $state.go('game');

    };


});
