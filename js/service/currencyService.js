(function () {

    var injectParams = ['$http', '$q'];

    var currencyFactory = function ($http, $q) {
        var factory = {};

        factory.getCurrencies = function () {

            var currencyMap = { "USD": "US Dollar", "SGD": "Singapore Dollar", "GBP": "British Poundsterling" }

            return currencyMap;
        };

        return factory;
    };

    currencyFactory.$inject = injectParams;

    angular.module('m2Board').factory('currencyService', currencyFactory);

}());