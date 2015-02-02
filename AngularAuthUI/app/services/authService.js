'use strict';
app.factory('authService', function ($http, $q, localStorageService) {

    var authServiceFactory = {};
    var serviceBase = 'http://localhost:34577/';

    var saveRegistration = function (registration) {
        return $http.post(serviceBase + 'api/account/register', registration)
            .then(function (response) {
                return response;
            });
    };

    var login = function (loginData) {
        var deferred = $q.defer();
        var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
        var config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        $http.post(serviceBase + 'token', data, config).success(function (response) {
            deferred.resolve(response);
        }).error(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    authServiceFactory.saveRegistration = saveRegistration;
    authServiceFactory.login = login;
    return authServiceFactory;

});