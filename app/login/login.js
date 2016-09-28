angular.module("login", []);

angular.module("login")
    .config([function () {
        console.log("I am the login config");
}]);

angular.module("login")
    .run([function () {
        console.log("I am run for login");
}]);
