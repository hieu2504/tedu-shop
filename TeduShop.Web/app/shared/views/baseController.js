(function (app) {
    app.controller('baseController', baseController);

    baseController.$inject = ['$scope', 'apiService'];
    function baseController($scope, apiService) {
        $scope.users = {}
        $scope.userName = '';
        $scope.get = get;
        function get() {
            apiService.get('/api/login/home', null, function (result) {
                debugger
                $scope.users = result.data;

            }, function () {
                console.log('Load user failed');
            });
        }
        $scope.get();
    }
})(angular.module('tedushop'))