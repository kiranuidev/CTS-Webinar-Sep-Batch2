angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc", "cartSvc", "$rootScope",

                                 function ($scope, productsSvc, cartSvc, $rootScope) {
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
            $scope.removeProductFromCart = function (product) {
                $rootScope.$broadcast("ProductRemoved", {
                    price: product.price
                });
            };
            $scope.addProductToCart = function (product) {

                $rootScope.$broadcast("AddedProduct", {
                    price: product.price
                });
                cartSvc.addProducts(product);
            };
}]);
