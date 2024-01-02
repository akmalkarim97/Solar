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
  
    // Init flatpicker
    if (flatPicker.length) {
      var date = new Date();
      flatPicker.each(function () {
        $(this).flatpickr({
          mode: 'range',
          defaultDate: ['2023-12-12', '2023-12-13']
        });
      });
    }
    document.addEventListener('DOMContentLoaded', function () {
    //fetch data from json file
    fetch('./app-assets/data/deviceLED.json')
  .then(response => response.json())
  .then(data => {
    // Line Chart
    // --------------------------------------------------------------------
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
        colors:["#9b59b6","#2ecc71","#3498db","#F08080"],
        series: [
          {
            name: "LED Voltage (V)",
            data: data.map(item => ({ x: item["TimeUpdate"], y: item["LEDVoltage_V"] }))
          },
          {
            name: "LED Current (A)",
            data: data.map(item => ({ x: item["TimeUpdate"], y: item["LEDCurrent_A"] }))
          },
          {
            name: "LED Power (w)",
            data: data.map(item => ({ x: item["TimeUpdate"], y: item["LEDPower_w"] }))
          },
          {
            name: "Light Brightness (%)",
            data: data.map(item => ({ x: item["TimeUpdate"], y: item["Light_Brightness_percent"] }))
          },
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
            '0000H',
            '0200H',
            '0400H',
            '0600H',
            '0800H',
            '1000H',
            '1200H',
            '1400H',
            '1600H',
            '1800H',
            '2000H',
            '2200H',
            '2359H',
          ]
        },
        yaxis: {
          opposite: isRtl
        }
      };
    
    var lineChartEl = document.querySelector('#line-chart-led')
    if (typeof lineChartEl !== undefined && lineChartEl !== null) {
      var lineChart = new ApexCharts(lineChartEl, lineChartConfig);
      lineChart.render()
    }


  })
})
  .catch(error => console.error('Error fetching data:', error));
  });