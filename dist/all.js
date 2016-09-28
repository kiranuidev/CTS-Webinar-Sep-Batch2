angular.module("authenticate")
    .service("authenticateSvc", [function () {
        var users = [
            {
                "_id": "57e25b9e087dc9830aa90c9b",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e5434eb1432a0f56f",
                "username": "Ford",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e1a72064a3dbedf5d",
                "username": "Toyota",
                "password": "C2000"
  },
            {
                "_id": "57e25b9eab3332ee499ac13e",
                "username": "BMW",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9e806c24b5ce23e463",
                "username": "VolksWagon",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9eba8a05be8c349616",
                "username": "Mercedez",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e440cea85ba2ecc95",
                "username": "Suzuki",
                "password": "POLO"
  },
            {
                "_id": "57e25b9ee973e7a97882739d",
                "username": "Yamaha",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9e07a199aed503a25a",
                "username": "Mercedez",
                "password": "A5"
  },
            {
                "_id": "57e25b9e8f217129ada80855",
                "username": "Audi",
                "password": "Fortuner"
  },
            {
                "_id": "57e25b9e102933776b3338e7",
                "username": "Ford",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e3ccbf0330e3c20b2",
                "username": "Mercedez",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e171dcbce0955bd7f",
                "username": "Jaguar",
                "password": "c4000"
  },
            {
                "_id": "57e25b9ef80c8dd6653fd1bf",
                "username": "Audi",
                "password": "Vento"
  },
            {
                "_id": "57e25b9eb1ab432a66014461",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9e5f540d0a188179f3",
                "username": "Audi",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e22c556e56d9843e1",
                "username": "Suzuki",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9ea209b07054dd486e",
                "username": "Toyota",
                "password": "A5"
  },
            {
                "_id": "57e25b9e24204f8fcab1b5c4",
                "username": "Ford",
                "password": "C2000"
  },
            {
                "_id": "57e25b9ed0a35e8c7058ae0e",
                "username": "VolksWagon",
                "password": "POLO"
  },
            {
                "_id": "57e25b9e173ff4278f96d756",
                "username": "Mercedez",
                "password": "c4000"
  },
            {
                "_id": "57e25b9ee9b70990d4d34090",
                "username": "Ford",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e32db0223311c5caf",
                "username": "Jaguar",
                "password": "Vento"
  },
            {
                "_id": "57e25b9eceb637a1cf2fb82c",
                "username": "Audi",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9e719fb09c53623f4a",
                "username": "Ford",
                "password": "A5"
  },
            {
                "_id": "57e25b9ecee5e88675b9e10d",
                "username": "Yamaha",
                "password": "FZ"
  },
            {
                "_id": "57e25b9e09e9c6fa172881ee",
                "username": "Toyota",
                "password": "c4000"
  },
            {
                "_id": "57e25b9e053417a906dbe10e",
                "username": "Yamaha",
                "password": "Vento"
  },
            {
                "_id": "57e25b9e1f9a18b5912823cc",
                "username": "Mercedez",
                "password": "A5"
  },
            {
                "_id": "57e25b9ea4a3a183dcfac0b2",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9ed6af4ac77b6f160c",
                "username": "BMW",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e300cc846f72df6d1",
                "username": "Jaguar",
                "password": "A5"
  },
            {
                "_id": "57e25b9e570b8b79eef93bdf",
                "username": "Mercedez",
                "password": "C2000"
  },
            {
                "_id": "57e25b9e76df2c81ee795221",
                "username": "Yamaha",
                "password": "Baleno"
  },
            {
                "_id": "57e25b9ee1b02154fc66773f",
                "username": "Mercedez",
                "password": "FZ"
  },
            {
                "_id": "57e25b9e6302ae32f0c43922",
                "username": "Suzuki",
                "password": "Endeavor"
  },
            {
                "_id": "57e25b9effd9db5cffc70879",
                "username": "VolksWagon",
                "password": "Vento"
  },
            {
                "_id": "57e25b9e700cc7f219c55e0b",
                "username": "Audi",
                "password": "Baleno"
  }
];
        var checkUser = function (loginUser) {
            //logic
            angular.forEach(users, function (user) {
                if (user.username.toLowerCase() == loginUser.username.toLowerCase() &&
                    user.password == loginUser.password) {
                    authenticate.isLoggedIn = true;
                    authenticate.username = user.username;
                    return user;
                }
            });
        };
        var authenticate = {
            isLoggedIn: false,
            username: ""
        };


        var resetUser = function () {
            authenticate.isLoggedIn = false;
            authenticate.username = "";
            return authenticate;
        };
        this.authenticateUser = function (user) {

            checkUser(user);
            return authenticate;
            //check useranem and passwod
            //if matches set the authenticate object 
            //else reset the authenticate object.
        };

        this.logOut = function () {

        };
    }]);

angular.module("authenticate", []);

angular.module("authenticate")
    .config([function () {
        console.log("I am the authenticate config");
}]);


angular.module("authenticate")
    .run([function () {
        console.log("I am run for authenticate");
}]);

angular.module("ctsComponents")
    .directive("brandName", [function () {
        return {
            template: "FlipZon",
            restrict: "A"
        }
}]);

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

angular.module("ctsComponents", []);

angular.module("customFilter")
    .filter("rangeFilter", [function () {
        return function (input, criteria1, criteria2) {
            var output = [];
            if (criteria1 && criteria2) {
                angular.forEach(input, function (item) {
                    if (item.price >= criteria1 && item.price <= criteria2) {
                        output.push(item);
                    }
                });
                return output;
            } else {
                return input;
            }
        };
}]);

angular.module("customFilter", []);

angular.module("header")
    .controller("headerCtrl", ["$scope", "$rootScope", "$translate",
                               function ($scope, $rootScope, $translate) {
            $scope.brandName = "FlipZon";
            $scope.total = {
                items: 0,
                price: 0
            };
            $scope.navItems = [{
                    display: "Home",
                    path: "home"
            },
                {
                    display: "Products",
                    path: "products"
            },
                {
                    display: "Register",
                    path: "register"
            },
                {
                    display: "Login",
                    path: "login"
            },
                {
                    display: "Cart",
                    path: "cart"
            }];
            $scope.loadView = function (viewPath) {
                var basePath = "app/templates/";
                $scope.content = basePath + viewPath + ".html"
            };
            $rootScope.$on("AddedProduct", function (evt, args) {
                $scope.total.items++;
                $scope.total.price += args.price;
            });

            $rootScope.$on("ProductRemoved", function (evt, args) {
                $scope.total.items--;
                $scope.total.price -= args.price;
            });

            $scope.changeLanguage = function (name) {
                $translate.use(name);
            };
}]);

angular.module("header", []);

angular.module("home")
    .controller("homeCtrl", ["$scope", "$state", function ($scope,
        $state) {

        console.log($state.params);
   }]);

angular.module("home", []);

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

angular.module("login", []);

angular.module("login")
    .config([function () {
        console.log("I am the login config");
}]);

angular.module("login")
    .run([function () {
        console.log("I am run for login");
}]);

angular.module("lookup")
    .service("lookupSvc", ["$http", function ($http) {
        this.getCountries = function () {
            return $http.get("app/api/countries.json");
        };
}]);

angular.module("lookup", []);

angular.module("lookup")
    .config([function () {
        console.log("I am the lookup config");
}]);


angular.module("products")
    .controller("cartCtrl", ["$scope", "cartSvc",
                                 function ($scope, cartSvc) {
            $scope.products = cartSvc.getCart();

    }]);

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

angular.module("products")
    .controller("productsCtrl", ["$scope", "productsSvc", "cartSvc", "$rootScope",

                                 function ($scope, productsSvc, cartSvc, $rootScope) {
            productsSvc.getProductList()
                .then(function (response) {
                    console.log(response);
                    $scope.products = response.data.products;
                }).catch(function (response) {
                    console.log(response);
                });
            $scope.productCount = 3;
            $scope.showMore = function () {
                $scope.productCount += 3;
            };
            $scope.removeProductFromCart = function (product) {
                $rootScope.$broadcast("ProductRemoved", {
                    price: product.price
                });
            };
            $scope.addProductToCart = function (product) {

                $rootScope.$broadcast("AddedProduct", {
                    price: product.price
                });
                cartSvc.addProducts(product);
            };
}]);

angular.module("products")
    .service("productsSvc", ["$http", "$q", function ($http, $q) {
        this.getProductList = function () {
            var dfd = $q.defer();
            $http.get("app/api/products.json")
                .then(function (response) {
                    dfd.resolve(response)
                }).catch(function (response) {
                    dfd.reject(response);
                });

            return dfd.promise;
            //return $http.get("app/api/products.json");
        };
}]);
/*
features:
1. services are constructor functions.
2. services are singleton.
3. services are injectable components.
*/

angular.module("products", []);

angular.module("register")
    .controller("registerCtrl", ["lookupSvc", "$scope", "$state",

                                 function (lookupSvc, $scope, $state) {
            var vm = this;
            $scope.userRegister = function () {
                $state.go("home", {
                    data: vm.user.firstName
                });
            };
            this.user = {};
            lookupSvc.getCountries()
                .then(function (response) {
                    vm.countries = response.data.countries;
                }).catch(function (response) {
                    vm.showError = true;
                });
            /*date picker settings"*/
            $scope.today = function () {
                $scope.dt = new Date();
            };
            $scope.today();

            $scope.clear = function () {
                $scope.dt = null;
            };

            $scope.inlineOptions = {
                customClass: getDayClass,
                minDate: new Date(),
                showWeeks: true
            };

            $scope.dateOptions = {
                dateDisabled: disabled,
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

            // Disable weekend selection
            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }

            $scope.toggleMin = function () {
                $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
                $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            };

            $scope.toggleMin();

            $scope.open1 = function () {
                $scope.popup1.opened = true;
            };

            $scope.open2 = function () {
                $scope.popup2.opened = true;
            };

            $scope.setDate = function (year, month, day) {
                $scope.dt = new Date(year, month, day);
            };

            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.format = $scope.formats[0];
            $scope.altInputFormats = ['M!/d!/yyyy'];

            $scope.popup1 = {
                opened: false
            };

            $scope.popup2 = {
                opened: false
            };

            var tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            var afterTomorrow = new Date();
            afterTomorrow.setDate(tomorrow.getDate() + 1);
            $scope.events = [
                {
                    date: tomorrow,
                    status: 'full'
    },
                {
                    date: afterTomorrow,
                    status: 'partially'
    }
  ];

            function getDayClass(data) {
                var date = data.date,
                    mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < $scope.events.length; i++) {
                        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                        if (dayToCheck === currentDay) {
                            return $scope.events[i].status;
                        }
                    }
                }

                return '';
            }


    }]);

angular.module("register", []);

angular.module("flipzon", ["login", "products", "home", "register", "header", "customFilter",
    "authenticate", "lookup", "ui.bootstrap", "pascalprecht.translate", "ctsComponents", "ui.router"]);

angular.module("flipzon")
    .config(['$translateProvider', "$stateProvider", function ($translateProvider, $stateProvider) {
        var homeObj = {
            templateUrl: "app/templates/home.html",
            controller: "homeCtrl",
            params: {
                data: ""
            }
        };
        var productObj = {
            templateUrl: "app/templates/products.html",
            controller: "productsCtrl"
        };
        var registerObj = {
            templateUrl: "app/templates/register.html",
            controller: "registerCtrl as vm"
        };

        $stateProvider.state("home", homeObj);
        $stateProvider.state("products", productObj);
        $stateProvider.state("register", registerObj);

        $translateProvider.translations('de', {
            "Home": "Zuhause",
            "Products": "Produkte",
            "Register": "Neu registrieren",
            "Login": " Anmeldung",
            "Cart": "Karte",
            "Bag": "Tasche",
            "Total Price": "Gesamtpreis"
        });
        $translateProvider.translations('en', {
            "Home": "Home",
            "Products": "Products",
            "Register": "Register",
            "Login": "Login",
            "Cart": "Cart",
            "Bag": "Bag",
            "Total Price": "Total Price"
        });
        $translateProvider.preferredLanguage('en');
        console.log("I am the flipzon config");
}]);

angular.module("flipzon")
    .run(["$translate", function ($translate) {
        console.log("I am run for flipzon");
        $translate.use('de');
}]);
