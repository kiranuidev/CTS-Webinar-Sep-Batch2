angular.module("products")
    .service("productsSvc", ["$http", "$q", function ($http, $q) {
        this.getProductList = function () {
            var dfd = $q.defer();
            $http.get("app/api/products.json")
                .then(function (response) {
                    dfd.resolve(response)
                }).catch(function (response) {
                    dfd.reject(response);
                });

            return dfd.promise;
            //return $http.get("app/api/products.json");
        };
}]);
/*
features:
1. services are constructor functions.
2. services are singleton.
3. services are injectable components.
*/
