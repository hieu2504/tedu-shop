/// <reference path="../assets/admin/libs/angular/angular.js" />
(function () {
    angular.module('tedushop.product_categories', ['tedushop.common']).config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('products_categories', {
            url: "/products_categories",
            templateUrl: "/app/components/product_categories/productCategoryListView.html",
            controller: "productCategoryListController"
        });
    }
})();