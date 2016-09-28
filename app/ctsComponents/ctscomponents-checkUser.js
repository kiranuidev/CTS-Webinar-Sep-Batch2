angular.module("ctsComponents")
    .directive("checkUserName", [function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                var users = [{
                        username: "kiran",
                        password: "abcd"
                        },
                    {
                        username: "teja",
                        password: "xyz"
                        }];
                element.bind('blur', function (evt) {
                    var username = this.value;
                    var isUserExists = false;
                    angular.forEach(users, function (user) {
                        if (user.username == username) {
                            isUserExists = true;
                        }
                    });
                    ctrl.$setValidity("usernamecheck", isUserExists);
                    return true;

                });
            }
        }
    }]);

angular.module("ctsComponents")
    .directive("complex", [function () {
        return {
            restrict: "A",
            template: "<h1>{{username}}</h1>",
            controller: function ($scope) {
                console.log("I am inside the controller");
            },
            compile: function (element, atts) {
                    console.log("compile phase");
                    console.log(element);
                    return {
                        pre: function (scope, element, attrs) {
                            scope.username = "kiran";
                            console.log("pre compile");
                            console.log(element);
                        },
                        post: function (scope, element, attrs) {
                            console.log("post compile");
                            console.log(element);
                        }
                    }
                }
                /* link: function (scope, element, attrs) {
                     console.log("I am inside the link funciton");
                 }*/
        }
    }]);

angular.module("ctsComponents")
    .directive("dynamicContent", ["$compile", function ($compile) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {

                //scope.name = "Cognizant";
                //scope.errorMessage = "We are only CTS";
                var myTemplate = "<h1>{{name}}<h1>";
                var errorTemplate = "<h1>{{errorMessage}}<h1>";
                var dirTemplate;

                if (scope.company == "CTS") {
                    dirTemplate = myTemplate;
                } else {
                    dirTemplate = errorTemplate;
                }
                var linkFn = $compile(dirTemplate)
                var output = linkFn(scope);
                element.append(output);
            }
        }
}]);

angular.module("ctsComponents")
    .directive("iAmComplex", [function () {
        return {
            template: "<div> <div ng-transclude></div><h1>Kiran</h1></div>",
            transclude: true
        };
}]);
