$(function () {
    'use strict';
  
       // Define a custom cell renderer for the "Battery Level" column
   function batteryLevelRenderer(params) {
    let value = params.value;

    const getColor = (percentage) => {
        return percentage > 70 ? 'green' : percentage > 40 ? 'orange' : 'red';
    };

    const adjustValue = () => {
        let maxValue, divisor;

        if (value < 18.1) {
            maxValue = 18;
            divisor = 18;
        } else {
            maxValue = 40;
            divisor = 40;
        }

        value = (value / divisor) * 100;
        const progressBarColor = getColor(value);

        return `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%;">
                <div class="progress" style="width: 80%; height: 30px;">
                    <div class="progress-bar bg-${progressBarColor}" role="progressbar" style="width: ${value}%" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100">
                        ${value.toFixed(2)}%
                    </div>
                </div>
            </div>
        `;
    };

    return adjustValue();
}
function switchDevices(cond) {
  let lightdevices = cond.lightdevices;

  if (lightdevices === 'ON') {
    document.getElementById("img").src= 'app-assets/images/icons/lighton_bulb.png';
  } else {
    document.getElementById("img").src = 'app-assets/images/icons/light_off.png';
  }

} 
       
    /*** COLUMN DEFINE ***/
    var columnDefs = [
      {
        headerName: 'Street Lamp ID',
        field: 'street lamp id',
        editable: true,
        sortable: true,
        filter: true,
        width: 250,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        headerCheckboxSelection: true
      },
      {
        headerName: 'Road',
        field: 'road',
        editable: true,
        sortable: true,
        filter: true,
        width: 150
      },
      {
        headerName: 'PN',
        field: 'pn',
        editable: true,
        sortable: true,
        filter: true,
        width: 210
      },
      {
        headerName: 'Battery Voltage',
        field: 'battery voltage',
        editable: true,
        sortable: true,
        filter: true,
        width: 280,
        cellRenderer: batteryLevelRenderer
      },
      {
        headerName: 'Solar Effiency',
        field: 'solar voltage',
        editable: true,
        sortable: true,
        filter: true,
        width: 200
      },
      {
        headerName: 'Connectivity',
        field: 'connectivity',
        editable: true,
        sortable: true,
        filter: true,
        width: 200
      },
      {
        headerName: 'Light Devices',
        field: 'light devices',
        editable: true,
        sortable: true,
        filter: true,
        width: 200
      },
      {
        headerName: 'Time Updates',
        field: 'last update',
        editable: true,
        sortable: true,
        filter: true,
        width: 200
      }
    ];
  
    /*** GRID OPTIONS ***/
    var gridOptions = {
      columnDefs: columnDefs,
      rowSelection: 'multiple',
      floatingFilter: true,
      filter: true,
      pagination: true,
      paginationPageSize: 20,
      pivotPanelShow: 'always',
      colResizeDefault: 'shift',
      animateRows: true,
      resizable: true
    };
  
    /*** DEFINED TABLE VARIABLE ***/
    var gridTable = document.getElementById('myGrid');
  
    var assetPath = 'app-assets/';
    if ($('body').attr('data-framework') === 'laravel') {
      assetPath = $('body').attr('data-asset-path');
    }
  
    /*** GET TABLE DATA FROM URL ***/
  
    agGrid.simpleHttpRequest({ url: assetPath + 'data/table-datatable-weststar-pp.json' }).then(function (data) {
      gridOptions.api.setRowData(data);
    });
  
    /*** FILTER TABLE ***/
    function updateSearchQuery(val) {
      gridOptions.api.setQuickFilter(val);
    }
  
    $('.ag-grid-filter').on('keyup', function () {
      updateSearchQuery($(this).val());
    });
  
    /*** CHANGE DATA PER PAGE ***/
    function changePageSize(value) {
      gridOptions.api.paginationSetPageSize(Number(value));
    }
  
    $('.sort-dropdown .dropdown-item').on('click', function () {
      var $this = $(this);
      changePageSize($this.text());
      $('.filter-btn').text('1 - ' + $this.text() + ' of 500');
    });
  
    /*** INIT TABLE ***/
    new agGrid.Grid(gridTable, gridOptions);
  
   /*** SET OR REMOVE EMAIL AS PINNED DEPENDING ON DEVICE SIZE ***/
  
   if ($(window).width() < 768) {
    gridOptions.columnApi.setColumnPinned('street lamp id', null);
  } else {
    gridOptions.columnApi.setColumnPinned('street lamp id', 'left');
  }
  $(window).on('resize', function () {
    if ($(window).width() < 768) {
      gridOptions.columnApi.setColumnPinned('street lamp id', null);
    } else {
      gridOptions.columnApi.setColumnPinned('street lamp id', 'left');
    }
  });
  
  
  });