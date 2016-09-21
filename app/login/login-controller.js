angular.module("login")
    .controller("loginCtrl", ["authenticateSvc", function (authenticateSvc) {
        var vm = this;
        vm.user = {};

        vm.login = function () {
            console.log(vm.user);
            authenticateSvc.authenticateUser(vm.user);
        };
}]);
