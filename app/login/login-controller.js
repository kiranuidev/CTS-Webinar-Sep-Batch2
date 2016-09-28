angular.module("login")
    .controller("loginCtrl", ["authenticateSvc", "$scope",
                              function (authenticateSvc,
            $scope) {
            var vm = this;
            vm.user = {};

            vm.login = function () {
                console.log(vm.user);
                authenticateSvc.authenticateUser(vm.user);
            };
            $scope.company = "TCS";
            $scope.name = "Cognizant";
            $scope.errorMessage = "We don't serve to TCS";

            $scope.$watch("name", function (newVal, oldVal) {
                console.log("OldValue: " + oldVal);
                console.log("NewValue: " + newVal)
            });
            setTimeout(function () {
                $scope.name = "Jateesh";
                $scope.$apply();

            }, 5000);
}]);
