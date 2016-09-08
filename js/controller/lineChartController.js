(function () {




    var LineChartController = function ($scope) {

        $scope.USDvisibility = true;
        $scope.EURvisibility = false;
        $scope.GBPvisibility = false;
        $scope.currency = "USD";

        $scope.loadLineChart = function (currentCurrency) {
            
            $scope.currency = currentCurrency;
            alert($scope.currency);
            if (currency == "USD") {
                
                $scope.USDvisibility = true;
                $scope.EURvisibility = false;
                $scope.GBPvisibility = false;
            }
            if (currency == "EUR") {
                
                $scope.USDvisibility = false;
                $scope.EURvisibility = true;
                $scope.GBPvisibility = false;
            }
            if (currency == "GBP") {
                $scope.USDvisibility = false;
                $scope.EURvisibility = false;
                $scope.GBPvisibility = true;
            }
            
        }



    }
    angular.module('m2Board').controller('lineChartController', LineChartController);

}());
