'use strict';
app.factory('authInterceptorService', function ($q, $location, localStorageService) {
    var authInterceptorServiceFactory = {};

    var request = function(config) {
        config.headers = config.headers || {};
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            config.headers.Authorization = 'Bearer ' + authData.token;
        }
        return config;
    };
    
    authInterceptorServiceFactory.request = request;
    return authInterceptorServiceFactory;
});