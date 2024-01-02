$(function () {
    'use strict';
  
    var flatPicker = $('.flat-picker'),
      isRtl = $('html').attr('data-textdirection') === 'rtl',
      chartColors = {
        column: {
          series1: '#826af9',
          series2: '#d2b0ff',
          bg: '#f8d3ff'
        },
        success: {
          shade_100: '#7eefc7',
          shade_200: '#06774f'
        },
        donut: {
          series1: '#ffe700',
          series2: '#00d4bd',
          series3: '#826bf8',
          series4: '#2b9bf4',
          series5: '#FFA1A1'
        },
        area: {
          series3: '#a4f8cd',
          series2: '#60f2ca',
          series1: '#2bdac7'
        }
      };
  
    // heat chart data generator
    function generateDataHeat(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  
        series.push({
          x: x,
          y: y
        });
        i++;
      }
      return series;
    }
  
    // Init flatpicker
    if (flatPicker.length) {
      var date = new Date();
      flatPicker.each(function () {
        $(this).flatpickr({
          mode: 'range',
          defaultDate: ['2019-05-01', '2019-05-10']
        });
      });
    }
  
    // Line Chart
    // --------------------------------------------------------------------
    var lineChartEl = document.querySelector('#line-chart'),
      lineChartConfig = {
        chart: {
          height: 400,
          type: 'line',
          zoom: {
            enabled: false
          },
          parentHeightOffset: 0,
          toolbar: {
            show: false
          }
        },
        series: [
          {
            data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50]
          }
        ],
        markers: {
          strokeWidth: 7,
          strokeOpacity: 1,
          strokeColors: [window.colors.solid.white],
          colors: [window.colors.solid.warning]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        colors: [window.colors.solid.warning],
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          padding: {
            top: -20
          }
        },
        tooltip: {
          custom: function (data) {
            return (
              '<div class="px-1 py-50">' +
              '<span>' +
              data.series[data.seriesIndex][data.dataPointIndex] +
              '%</span>' +
              '</div>'
            );
          }
        },
        xaxis: {
          categories: [
            '7/12',
            '8/12',
            '9/12',
            '10/12',
            '11/12',
            '12/12',
            '13/12',
            '14/12',
            '15/12',
            '16/12',
            '17/12',
            '18/12',
            '19/12',
            '20/12',
            '21/12'
          ]
        },
        yaxis: {
          opposite: isRtl
        }
      };
    if (typeof lineChartEl !== undefined && lineChartEl !== null) {
      var lineChart = new ApexCharts(lineChartEl, lineChartConfig);
      lineChart.render();
    }
  
  });