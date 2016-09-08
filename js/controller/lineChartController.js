(function () {

    angular.module('m2Board', [])

    .controller('lineChartController', function($scope) {
       

   

        $scope.loadLineChart = function(currency) {
            alert('i am ' + currency);
        }


    });



}());

