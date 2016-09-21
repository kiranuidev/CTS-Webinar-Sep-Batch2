angular.module("products")
    .service("productsSvc", ["$http", function ($http) {
        this.getProductList = function () {
            return $http.get("app/api/products.json");
        };
}]);
/*
features:
1. services are constructor functions.
2. services are singleton.
3. services are injectable components.
*/
