(function () {

    angular.module('m2Board', [])

     .controller('lineChartController', ['$scope', 'currencyService', function lineChartController($scope, currencyService) {
       

   

        $scope.loadLineChart = function(currency) {
            alert('i am ' + currency);
        }


    }]);



}());

