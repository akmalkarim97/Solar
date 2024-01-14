const columnDefs = [
  { headerName: 'Time',
   field: 'time', 
   editable: true,
   sortable: true,
   filter: true,
   width: 250
  },
  { headerName: 'Temperature', 
  field: 'temperature',
  editable: true,
  sortable: true,
  filter: true,
  width: 200
  },
  { headerName: 'Humidity',
   field: 'humidity',
   editable: true,
   sortable: true,
   filter: true,
   width: 200
  },
  { headerName: 'Rain Intensity', 
  field: 'rainIntensity', 
  editable: true,
  sortable: true,
  filter: true,
  width: 200},
  { headerName: 'Weather Condition', 
  field: 'weatherCode', 
  editable: true,
  sortable: true,
  filter: true,
  width: 200},
  { headerName: 'Weather Condition', 
  field: 'weatherCode', 
  editable: true,
  sortable: true,
  filter: true,
  width: 200},
  { headerName: 'Cloud Cover', 
  field: 'cloudCover', 
  editable: true,
  sortable: true,
  filter: true,
  width: 200},
  { headerName: 'UV Index', 
  field: 'uvIndex', 
  editable: true,
  sortable: true,
  filter: true,
  width: 200}
];

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

const eGridDiv = document.querySelector('#myGrid');

const options = { method: 'GET', headers: { accept: 'application/json' } };

const apiKey = '4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY';
const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=johor%20bahru&timesteps=hourly&apikey=${apiKey}`;
new agGrid.Grid(eGridDiv, gridOptions);

fetch(apiUrl, options)
  .then(response => response.json())
  .then(data => {
    const hourlyData = data.timelines.hourly;

    // Transform the data to fit Ag-Grid structure
    const formattedData = hourlyData.map(hourly => ({
      time: hourly.time,
      temperature: hourly.values.temperature,
      humidity: hourly.values.humidity,
      rainIntensity: hourly.values.rainIntensity,
      weatherCode: hourly.values.weatherCode,
      cloudCover: hourly.values.cloudCover,
      uvIndex: hourly.values.uvIndex
    }));

    // Update Ag-Grid with the formatted data
    gridOptions.api.setRowData(formattedData);
  })
  .catch(err => console.error(err));

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
    gridOptions.columnApi.setColumnPinned('time', null);
  } else {
    gridOptions.columnApi.setColumnPinned('time', 'left');
  }
  $(window).on('resize', function () {
    if ($(window).width() < 768) {
      gridOptions.columnApi.setColumnPinned('time', null);
    } else {
      gridOptions.columnApi.setColumnPinned('time', 'left');
    }
  });
