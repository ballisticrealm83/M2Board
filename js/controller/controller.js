(function () {

    


    var MeterController = function ($scope,currencyService) {
        $scope.loadLineChart = function (currency) {
            alert('i am meter ' + currency);
        }

        $scope.isPositive = function (currency) {
            for (var index in $scope.currencies)
            {
                var curr = $scope.currencies[index];
                if(curr.code==currency)
                {
                    return curr.balance>0
                }
            }

            return false;

        }

        $scope.currencies = currencyService.getCurrencies();

     
    }

    angular.module('m2Board').controller('meterController', MeterController);
   
}());

