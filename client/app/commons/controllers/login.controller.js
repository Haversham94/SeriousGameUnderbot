commonApp.controller('LoginControllerCommon', function ($scope, $state, Auth) {

    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard

    $scope.login = function (form) {
        $scope.submitted = true;
        console.log($scope.user);
        if (form.$valid) {
            Auth.login({
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                .then(() => {
                    // Logged in, redirect to home
                    $state.go('main');
                })
                .catch(err => {
                    $scope.errors.other = err.message;
                });
        }
    };


});
