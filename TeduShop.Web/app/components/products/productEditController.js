(function (app) {
    app.controller('productEditController', productEditController);

    productEditController.$inject = ['$scope', 'apiService', 'notificationService', '$state', '$stateParams', 'commonService'];

    function productEditController($scope, apiService, notificationService, $state, $stateParams, commonService) {
        $scope.product = {
            CreatedDate: new Date(),
            Status: true,
        }
        $scope.ckeditorOptions = {
            languague: 'vi',
            height:'200px'
        }
        $scope.UpdateProduct = UpdateProduct;
        $scope.GetSeoTitle = GetSeoTitle;
        $scope.parentCategories = [];
        function GetSeoTitle() {
            debugger;
            $scope.product.Alias = commonService.getSeoTitle($scope.product.Name);
        }

        function loadProductDetail() {
            apiService.get('/api/product/getbyid/' + $stateParams.id, null, function (result) {
                $scope.product = result.data;
            }, function (error) {
                notificationService.displayError(error.data);
            });
        }

        function UpdateProduct() {
            apiService.put('/api/product/update', $scope.product,
                function (result) {
                    //debugger;
                    notificationService.displaySuccess(result.data.Name + ' đã được cập nhập.');
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Cập nhập không thành công');
                });
        }

        function loadProductCategory() {
            apiService.get('/api/productcategory/getallparents', null, function (result) {
                debugger
                $scope.parentCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }

        loadProductCategory();
        loadProductDetail();
    }

})(angular.module('tedushop.product_categories'));