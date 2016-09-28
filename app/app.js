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
