(function () {


    angular.module('m2Board', [])

    .controller('gaugeController', ['$scope', 'currencyService', function GaugeControler($scope, currencyService) {

        alert(currencyService.getCurrencies()['SGD']);




        /*
        setTimeout(
   function () {
       $("#greenArc").attr("stroke-dasharray", "200,943");
       $("#greenArcMask").attr("stroke-dasharray", "50,943");
   }, 2000);
   */


    }]);


}());

