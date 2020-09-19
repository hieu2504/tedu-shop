/// <reference path="../../../assets/admin/libs/angular/angular.js" />

(function (app) {
    app.factory('apiService', apiService);

    apiService.$inject = ['$http'];

    function apiService($http) {
        return {
            get: get
        }

        function get(url, params, success, failured) {
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                failured(error)
            });
        }
    }
})(angular.module('tedushop.common'));