(function () {




    var LineChartController = function ($scope, currencyService) {

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

        $scope.loadLineChart = function (currency) {
            alert('i am meter ' + currency);
        }

        $scope.isPositive = function (currency) {
            for (var index in $scope.currencies) {
                var curr = $scope.currencies[index];
                if (curr.code == currency) {
                    return curr.balance > 0
                }
            }

            return false;

        }

        $scope.currencies = currencyService.getCurrencies();


        $scope.load = function (currency) {

           
            // dataPoints
            var dataPoints1 = [];


            var chart = new CanvasJS.Chart("dynamicChartContainer", {
                zoomEnabled: true,
                title: {
                    //#to-do change USD to {{currency}}
                    text: "Money Movement - " + currency
                },
                toolTip: {
                    shared: true

                },
                legend: {
                    verticalAlign: "top",
                    horizontalAlign: "center",
                    fontSize: 14,
                    fontWeight: "bold",
                    fontFamily: "calibri",
                    fontColor: "dimGrey"
                },
                axisX: {
                    title: "chart updates every secs"
                },
                axisY: {
                    prefix: '$',
                    includeZero: false
                },
                data: [{
                    // dataSeries1
                    type: "line",
                    xValueType: "dateTime",
                    showInLegend: true,
                    //#to-do change USD to {{currency}}
                    name: "{{currency}}",
                    dataPoints: dataPoints1
                }],
                legend: {
                    cursor: "pointer",
                    itemclick: function (e) {
                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        }
                        else {
                            e.dataSeries.visible = true;
                        }
                        chart.render();
                    }
                }
            });

            var updateInterval = 1000;
            // initial value
            var yValue1 = 640;

            var time = new Date();

            var updateChart = function (count) {
                count = count || 1;

                // count is number of times loop runs to generate random dataPoints.

                for (var i = 0; i < count; i++) {

                    // add interval duration to time
                    time.setTime(time.getTime() - updateInterval);

                    // generating random values
                    var deltaY1 = .5 + Math.random() * (-.5 - .5);

                    // adding random value and rounding it to two digits.
                    yValue1 = Math.round((yValue1 + deltaY1) * 100) / 100;

                    // pushing the new values
                    dataPoints1.push({
                        x: time.getTime(),
                        y: yValue1
                    });

                };

                // updating legend text with  updated with y Value, #to-do change USD to {{currency}}
                chart.options.data[0].legendText = " USD  $" + yValue1;

                chart.render();
            };

            // generates first set of dataPoints
            updateChart(1000);

            // update chart after specified interval
            setInterval(function () { updateChart() }, updateInterval);
        }
        

    }
    angular.module('m2Board').controller('lineChartController', LineChartController);

}());
