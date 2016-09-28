angular.module("ctsComponents")
    .directive("oneWayBinding", [function () {
        return {
            templateUrl: "app/templates/oneWayBinding.html",
            scope: {
                dirname: "@", ////one way binding.
                counter: "=" //two way binding
            }
        }
}]);

angular.module("ctsComponents")
    .controller("demoCtrl", ["$scope", function ($scope) {
        $scope.username = "kiran";
        $scope.count = 0;
}]);
