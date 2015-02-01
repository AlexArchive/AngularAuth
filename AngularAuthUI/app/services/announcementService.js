'use strict';
app.factory('announcementService', ['$http', function ($http) {

    var serviceBase = 'http://localhost:34577/';
    var ordersServiceFactory = {};

    var _getOrders = function () {

        return $http.get(serviceBase + 'api/announcements').then(function (result) {
            return result;
        });
    };

    ordersServiceFactory.getOrders = _getOrders;

    return ordersServiceFactory;

}]);