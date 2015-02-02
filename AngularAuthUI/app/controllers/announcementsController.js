'use strict';
app.controller('announcementsController', function ($scope, announcementsService) {
    $scope.announcements = [];
    announcementsService.getAnnouncements().then(function (results) {
        $scope.announcements = results.data;
    }, function (error) {
    });
});