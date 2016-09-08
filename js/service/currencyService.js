(function () {

    var injectParams = ['$http', '$q'];

    var currencyFactory = function ($http, $q) {


       /* var usdPosition = { "USD": "US Dollar", "": "true", "position": "true", "" };
        var sgdPosition = { "SGD": "SG Dollar", "SGD": "Singapore Dollar", "GBP": "British Poundsterling" };
        var gbpPosition = { "GBP": "British Dollar", "SGD": "Singapore Dollar", "GBP": "British Poundsterling" };

        */
        var factory = {};

        factory.getCurrencies = function () {

            var currencyMap = { "USD": "US Dollar", "SGD": "Singapore Dollar", "GBP": "British Poundsterling" }

            return currencyMap;
        };


        factory.getCurrencyBalance = function () {

            var currencyBalanceMap = { "USD": "20", "SGD": "40", "GBP": "-20" }
            return currencyBalanceMap;
        };

        return factory;
    };

    currencyFactory.$inject = injectParams;

    angular.module('m2Board').factory('currencyService', currencyFactory);

}());