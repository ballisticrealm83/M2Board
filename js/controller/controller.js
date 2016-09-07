(function () {

angular.module('m2Board', [])

    .controller('gaugeController', ['$scope', currencyService, function GaugeController($scope, currencyService) {
        

        alert(currencyService);
        
        
        /*
        setTimeout(
   function () {
       $("#greenArc").attr("stroke-dasharray", "200,943");
       $("#greenArcMask").attr("stroke-dasharray", "50,943");
   }, 2000);
   */
      


    }]);

}());

