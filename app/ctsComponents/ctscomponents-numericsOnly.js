angular.module("ctsComponents")
    .directive("numericsOnly", [function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind('keypress', function (evt) {
                    var regex = new RegExp(/^[0-9\s]+$/);
                    if (!regex.test(evt.key)) {
                        evt.preventDefault();
                    }
                });
            }
        }
    }]);
