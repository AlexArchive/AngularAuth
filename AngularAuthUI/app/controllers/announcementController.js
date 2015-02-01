'use strict';
app.controller('announcementController', ['$scope', 'announcementService', function ($scope, loungeService) {

    console.log("trace");

    $scope.orders = [];

    loungeService.getOrders().then(function (results) {

        $scope.orders = results.data;

    }, function (error) {
        //alert(error.data.message);
    });

}]);