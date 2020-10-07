//(function (app) {
//    app.controller('rootcontroller', rootcontroller);

//    rootcontroller.$inject = ['$state', 'authdata', 'loginservice', '$scope', 'authenticationservice'];

//    function rootcontroller($state, authdata, loginservice, $scope, authenticationservice) {
//        $scope.logout = function () {
//            loginservice.logout();
            
//            window.location.href = "admin#!/login";
//            window.location.reload();
            
//        }
        
//        $scope.authentication = authdata.authenticationdata;
        
//    }
//})(angular.module('tedushop'));

(function (app) {
    app.controller('rootController', rootController);

    rootController.$inject = ['$state', 'authData', 'loginService', '$scope', 'authenticationService'];

    function rootController($state, authData, loginService, $scope, authenticationService, ) {
        $scope.logOut = function () {
            loginService.logOut();
            $state.go('login');
            //window.location.href = "admin#!/login";
           // window.location.reload();
        }
        $scope.authentication = authData.authenticationData;

       // authenticationService.validateRequest();
    }
})(angular.module('tedushop'));
//$state.go('login');
//window.localstorage.clear();