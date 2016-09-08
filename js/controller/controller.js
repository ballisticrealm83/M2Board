(function () {

    


    var MeterController = function ($scope) {
        $scope.loadLineChart = function (currency) {
            alert('i am meter ' + currency);
        }


    }
    angular.module('m2Board').controller('meterController', MeterController);
   
}());

