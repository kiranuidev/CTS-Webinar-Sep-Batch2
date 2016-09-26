angular.module("flipzon", ["login", "products", "home", "register", "header", "customFilter",
    "authenticate", "lookup", "ui.bootstrap", "pascalprecht.translate", "ctsComponents"]);

angular.module("flipzon")
    .config(['$translateProvider', function ($translateProvider) {
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
