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
