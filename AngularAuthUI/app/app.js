var app = angular.module('AngularAuth', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });
    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app/views/signup.html"
    });
    $routeProvider.otherwise({ redirectTo: "/home" });
});