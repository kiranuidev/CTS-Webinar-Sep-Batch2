angular.module("products")
    .controller("cartCtrl", ["$scope", "cartSvc",
                                 function ($scope, cartSvc) {
            $scope.products = cartSvc.getCart();

    }]);
