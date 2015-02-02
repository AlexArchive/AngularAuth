'use strict';
app.controller('signupController', function ($scope, authService) {
    $scope.message = "";
    $scope.registration = {
        userName: "",
        password: "",
        confirmPassword: ""
    };
    $scope.signUp = function () {
        authService.saveRegistration($scope.registration).then(function() {
            $scope.message = 'User has been registered successfully.';
        },
        function (response) {
            var errors = [];
            for (var key in response.data.modelState) {
                for (var i = 0; i < response.data.modelState[key].length; i++) {
                    errors.push(response.data.modelState[key][i]);
                }
            }
            $scope.message = errors.join(' ');
            console.log(response);
        });
    };
});