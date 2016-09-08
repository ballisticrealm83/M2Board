(function () {




    var LineChartController = function ($scope) {
        $scope.loadLineChart = function (currency) {
            alert('i am line ' + currency);
        }



    }
    angular.module('m2Board').controller('lineChartController', LineChartController);

}());
