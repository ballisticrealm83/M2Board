(function () {

    var injectParams = ['$http', '$q'];

    var currencyFactory = function ($http, $q) {


        var usdPosition = { "code": "USD", "balance": "50", "stroke": "235, 943", "maskStroke": "150, 943" };
        var sgdPosition = { "code": "SGD", "balance": "-25", "stroke": "300, 943", "maskStroke": "235, 943" };
        var gbpPosition = { "code": "GBP", "balance": "30", "stroke": "235, 943", "maskStroke": "50, 943" };
        var idrPosition = { "code": "IDR", "balance": "-30", "stroke": "400, 943", "maskStroke": "235, 943" };

        var currencies = [usdPosition, sgdPosition, gbpPosition];
        
        var factory = {};

        factory.getCurrencies = function () {

            return currencies;
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