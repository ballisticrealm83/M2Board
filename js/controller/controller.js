(function () {


    angular.module('m2Board', [])

    .controller('gaugeController', ['$scope', 'currencyService', function GaugeControler($scope, currencyService) {

        //alert(currencyService.getCurrencies()['SGD']);


        var balance = currencyService.getCurrencyBalance()['USD'];
       
        var percentage = balance / 100;

        var greenArcMaskStroke = percentage * 235;
        var greenArcStroke = 235 - greenArcMaskStroke;

        //alert(greenArcStroke);
        //alert(greenArcMaskStroke);

        $("#redArc").attr("stroke-dasharray", greenArcStroke + ",943");
        $("#redArcMask").attr("stroke-dasharray", greenArcMaskStroke+",943");

        /*
        setTimeout(
   function () {
       $("#greenArc").attr("stroke-dasharray", "200,943");
       $("#greenArcMask").attr("stroke-dasharray", "50,943");
   }, 2000);
   */


    }]);


}());

