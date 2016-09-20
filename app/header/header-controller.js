angular.module("header")
    .controller("headerCtrl", ["$scope", function ($scope) {
        $scope.brandName = "FlipZon";

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
}]);
