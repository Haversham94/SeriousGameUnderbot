'use strict';
sguApp.controller('NavbarController', function ($scope, Auth) {
    //start-non-standard
    $scope.menu = [{
        'title': 'Home',
        'state': 'main'
  }];

    $scope.isCollapsed = true;
    //end-non-standard

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;


});
