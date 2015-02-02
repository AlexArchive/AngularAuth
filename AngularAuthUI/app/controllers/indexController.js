'use strict';
app.controller('indexController',  function ($scope, $location, authService) {
    $scope.authentication = authService.authentication;
});