/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('tedushop', ['tedushop.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: "/admin",
            templaterUrl: "/app/components/homeView.html",
            controller:"homeController"
        })
    }
})