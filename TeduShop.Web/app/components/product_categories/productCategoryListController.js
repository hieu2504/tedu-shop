(function (app) {
    app.controller('productCategoryListController', productCategoryListController);

    productCategoryListController.$inject = ['$scope','apiService'];

    function productCategoryListController($scope, apiService) {
        $scope.productCategories = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getProductCategories = getProductCategories;
        function getProductCategories(page) {
            page = page || 0;
            var config = {
                params: {
                    page: page,
                    pageSize: 2
                }
            }
            apiService.get('/api/productcategory/getall', config, function (result) {
                $scope.productCategories = result.data;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.PageCounts;
                $scope.totalCount = result.data.TotalCount;
            }, function () {
                    console.log('Load productcategory failed');
            });
        }

        $scope.getProductCategories();

    }
})(angular.module('tedushop.product_categories'));

//(angular.module('tedushop.product_categories')) khai bao controller nay thuoc module tedushop.product_categories