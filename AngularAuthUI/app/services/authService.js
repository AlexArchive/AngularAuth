'use strict';
app.factory('authService', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {

    var serviceBase = 'http://localhost:34577/';
    var authServiceFactory = {};

    var _saveRegistration = function (registration) {
        return $http.post(serviceBase + 'api/account/register', registration).then(function (response) {
            return response;
        });
    };

    authServiceFactory.saveRegistration = _saveRegistration;
    return authServiceFactory;

}]);