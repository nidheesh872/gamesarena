'use strict';

preferencesServices.service("dataService", ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {

    var restAPIUrl = "";
    var authorization = ""

    var httpGet = function (deferred, url, options) {
        $http.get(url, options)
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                deferred.reject(response);
            });
    }

    var httpPost = function (deferred, url, data, options) {
        $http.post(url, data, options)
            .then(function (response) {
                deferred.resolve(response);
            }, function (response) {
                deferred.reject(response);
            });
    }
    this.getData = function (language, stars, page) {
        var deferred = $q.defer();
        httpGet(deferred, 'sampledata/data.json');
        return deferred.promise;
    }

}]);