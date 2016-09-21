angular.module("register")
    .controller("registerCtrl", ["lookupSvc", function (lookupSvc) {
        var vm = this;
        this.user = {};
        lookupSvc.getCountries()
            .then(function (response) {
                vm.countries = response.data.countries;
            }).catch(function (response) {
                vm.showError = true;
            });

}]);
