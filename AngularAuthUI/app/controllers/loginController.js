'use strict';
app.controller('loginController', function ($scope, authService) {
    $scope.message = "";
    $scope.loginData = {
        userName: "",
        password: ""
    };
    $scope.login = function() {
        authService.login($scope.loginData).then(function (response) {
            $scope.message = "Authenticated successfully";
        }, function (err) {
            $scope.message = err.error_description;
        });
    };
});