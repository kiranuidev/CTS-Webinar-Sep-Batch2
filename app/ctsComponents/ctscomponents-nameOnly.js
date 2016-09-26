angular.module("ctsComponents")
    .directive("nameOnly", [function () {
        return {
            restrict: "A",
            /*
            scope- it inherits the controller scope.
            */
            link: function (scope, element, attrs) {

                element.bind('keypress', function (evt) {
                    var hasLength;
                    if (attrs['ngMaxlength']) {
                        hasLength = this.value.length < attrs['ngMaxlength']
                    } else {
                        hasLength = true;
                    }
                    var regex = new RegExp(/^[a-zA-Z\s]+$/);
                    if (regex.test(evt.key) && hasLength) {

                    } else {
                        evt.preventDefault();
                    }
                });
            }
        }
    }]);