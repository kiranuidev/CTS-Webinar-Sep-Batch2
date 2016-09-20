angular.module("products")
    .service("cartSvc", [function () {
        var cart = [];
        this.addProducts = function (product) {
            cart.push(product);
        };
        this.removeProduct = function (product) {
            //do it later...
        };
        this.getCart = function () {
            //should return the list of products. 
            return cart;
        };
}]);
