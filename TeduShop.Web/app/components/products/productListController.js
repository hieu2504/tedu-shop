(function (app) {
    app.controller('productListController', productListController);

    productListController.$inject = ['$scope', 'apiService','notificationService']

    function productListController($scope, apiService, notificationService) {
        $scope.products = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getProducts = getProducts;
        $scope.keyword = '';

        $scope.search = search;

        function search() {
            getProducts();
        }

        function getProducts(page) {
            page = page || 0;
           // debugger;
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize:20
                }
            }
            // result là dữ liệu được trả về từ hàm getAll trong Api
            apiService.get('/api/product/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning('Không có bản ghi nào được tìm thấy.')
                }
                debugger;
                $scope.products = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;

            }, function () {
                console.log('Load product failed');
            });
        }
        //debugger;
        //chạy phương thức ngay sau khi vào trang
        $scope.getProducts();
    }
})(angular.module('tedushop.products'));