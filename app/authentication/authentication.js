angular.module("authenticate", []);

angular.module("authenticate")
    .config([function () {
        console.log("I am the authenticate config");
}]);


angular.module("authenticate")
    .run([function () {
        console.log("I am run for authenticate");
}]);
