(function (app) {
    app.controller('productAddController', productAddController);

    productAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state','$filter','commonService'];

    function productAddController($scope, apiService, notificationService, $state, $filter, commonService) {
        $scope.product = {
            Status: true
        };
        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }
        //$scope.ChangeText = ChangeText;
        $scope.AddProduct = AddProduct;
        $scope.GetSeoTitle = GetSeoTitle;
       
        function GetSeoTitle() {
            //debugger;
            $scope.product.Alias = commonService.getSeoTitle($scope.product.Name);
        }
        //function ChangeText() {
        //    debugger;
            
        //}
        function AddProduct() {
           // $scope.product.Content = html(CKEDITOR.instances.content1.getData());
            debugger;
            apiService.post('/api/product/create', $scope.product,
                function (result) {
                    debugger;
                    notificationService.displaySuccess(result.data.Name + ' đã được thêm.');
                    $state.go('products');
                }, function (error) {
                    notificationService.displayError('Thêm mới không thành công');
                });
        }
        

        function loadProductCategory() {
            apiService.get('/api/productcategory/getallparents', null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                console.log('Cannot get list parent');
            });
        }

        $scope.ChooseImage = ChooseImage;
        function ChooseImage() {
            var finder = new CKFinder();
            debugger;
            finder.selectActionFunction = function (fileUrl) {
                $scope.product.Image = fileUrl;
            }
            finder.popup();
        }
        loadProductCategory();

    }
    
    
})(angular.module('tedushop.products'));