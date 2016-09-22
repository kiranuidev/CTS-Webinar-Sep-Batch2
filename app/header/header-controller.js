angular.module("header")
    .controller("headerCtrl", ["$scope", "$rootScope",
                               function ($scope, $rootScope) {
            $scope.brandName = "FlipZon";
            $scope.total = {
                items: 0,
                price: 0
            };
            $scope.navItems = [{
                    display: "Home",
                    path: "home"
            },
                {
                    display: "Products",
                    path: "products"
            },
                {
                    display: "Register",
                    path: "register"
            },
                {
                    display: "Login",
                    path: "login"
            },
                {
                    display: "Cart",
                    path: "cart"
            }];
            $scope.loadView = function (viewPath) {
                var basePath = "app/templates/";
                $scope.content = basePath + viewPath + ".html"
            };
            $rootScope.$on("AddedProduct", function (evt, args) {
                $scope.total.items++;
                $scope.total.price += args.price;
            });

            $rootScope.$on("ProductRemoved", function (evt, args) {
                $scope.total.items--;
                $scope.total.price -= args.price;
            });
}]);
