commonApp.controller('LoginControllerCommon', function ($scope, $state, Auth) {

    //start-non-standard
    $scope.user = {};
    $scope.errors = {};
    $scope.submitted = false;
    //end-non-standard

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


    $scope.login = function (form) {
        $scope.submitted = true;
        if (form.$valid) {
            Auth.login({
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                .then(() => {
                    // Logged in, redirect to home
                    if (!$scope.isAdmin()) {
                        $state.go('niveau');
                    } else {
                        $state.go('admin');
                    }
                })
                .catch(err => {
                    $scope.errors.other = err.message;
                });
        }
    };


});
