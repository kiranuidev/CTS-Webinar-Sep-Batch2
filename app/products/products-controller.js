angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc", "cartSvc",

                                 function ($scope, productsSvc, cartSvc) {
            productsSvc.getProductList()
                .then(function (response) {
                    console.log(response);
                    $scope.products = response.data.products;
                }).catch(function (response) {
                    console.log(response);
                });
            $scope.productCount = 3;
            $scope.showMore = function () {
                $scope.productCount += 3;
            };
            $scope.addProductToCart = function (product) {
                cartSvc.addProducts(product);
            };
}]);
