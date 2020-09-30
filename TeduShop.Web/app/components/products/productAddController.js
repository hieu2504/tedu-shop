(function (app) {
    app.controller('productAddController', productAddController);

    productAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state','$filter'];

    function productAddController($scope, apiService, notificationService, $state, $filter) {
        $scope.product = {
            Status: true
        };
        $scope.ChooseImage = ChooseImage;
        function ChooseImage() {
            var finder = new CKFinder();
            debugger;
            finder.selectActionFunction = function (fileUrl) {
                $scope.product.Image = fileUrl;
            }
            finder.popup();
        }
        $scope.AddProduct = AddProduct;
        
        function AddProduct() {
            apiService.post('/api/product/create', $scope.product,
                function (result) {
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm.');
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công');
                });
        }
        
       // debugger;
        function loadProductCategory() {
            apiService.get('/api/productcategory/getallparents', null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }
        // debugger;
        
        loadProductCategory();
    }
    
    
})(angular.module('tedushop.products'));