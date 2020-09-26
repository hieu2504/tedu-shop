(function (app) {
    app.controller('productAddController', productAddController);

    productAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state'];

    function productAddController($scope, apiService, notificationService, $state) {
        debugger;
        function loadProductCategory() {
            apiService.get('api/productcategory/getallparents', null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }
        debugger;
        loadProductCategory();
    }
    
    
})(angular.module('tedushop.products'));