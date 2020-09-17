/// <reference path="../plugins/angular/angular.js" />
var myApp = angular.module('myModule', []);

myApp.controller("schoolController", schoolController);

myApp.directive("teduShopDirective", teduShopDirective);

myApp.service('validatorService', validatorService);

myController.$inject=['$scope','Validator']

//declare: khai bao
function schoolController($scope, validatorService) {
    $scope.checkNumber = function () {
        $scope.message = validatorService.checkNumber($scope.num);
    }
    $scope.num = 1;
}

function validatorService($window) {
    return {
        checkNumber : checkNumber
    }

    function checkNumber(input) {
        if (input % 2 == 0) {
            return 'this is even';
        } else {
            return 'this is odd';
        }
    }
}

function teduShopDirective() {
    return {
        templateUrl:"/Scripts/spa/teduShopDirective.html"
    }
}
