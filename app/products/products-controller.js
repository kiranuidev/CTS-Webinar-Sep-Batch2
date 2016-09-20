angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc", "cartSvc",

                                 function ($scope, productsSvc, cartSvc) {
            $scope.products = productsSvc.getProductList();
            $scope.productCount = 3;
            $scope.showMore = function () {
                $scope.productCount += 3;
            };
            $scope.addProductToCart = function (product) {
                cartSvc.addProducts(product);
            };
}]);
