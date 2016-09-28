angular.module("ctsComponents")
    .directive("complex", [function () {
        return {
            restrict: "A",
            controller: function (scope) {
                console.log("I am inside the controller");
            },
            link: function (scope, element, attrs) {
                console.log("I am inside the link funciton");
            }
        }
    }]);
