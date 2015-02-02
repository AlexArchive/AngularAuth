'use strict';
app.factory('announcementsService', function ($http) {
    var serviceBase = 'http://localhost:34577/';
    var announcementsServiceFactory = {};
    var getAnnouncements = function () {
        return $http.get(serviceBase + 'api/announcements').then(function (results) {
            return results;
        });
    };
    announcementsServiceFactory.getAnnouncements = getAnnouncements;
    return announcementsServiceFactory;
});
