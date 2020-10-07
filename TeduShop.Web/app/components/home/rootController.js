(function (app) {
    app.controller('rootController', rootController);

    rootController.$inject = ['$state', 'authData', 'loginService', '$scope', 'authenticationService'];

    function rootController($state, authData, loginService, $scope, authenticationService) {
        $scope.logOut = function () {
            loginService.logOut();
            //$state.go('login');
            window.location.href = "admin#!/login";
            window.location.reload();
            //window.localStorage.clear();
        }
        
        $scope.authentication = authData.authenticationData;
        
    }
})(angular.module('tedushop'));