  //humidity level
  const humiditylevel = (params) => {
    const element = document.createElement('span');
    const imageElement = document.createElement('img');
    
    imageElement.width = 54;
    imageElement.height = 54;
    imageElement.src ='app-assets/images/icons/weather/svg/humidity.svg',
    element.appendChild(imageElement);
    element.appendChild(document.createTextNode(params.value));
    return element;
  };
  
   //humidity level
   const probrain = (params) => {
    const element = document.createElement('span');
    const imageElement = document.createElement('img');
    
    imageElement.width = 54;
    imageElement.height = 54;
    imageElement.src ='app-assets/images/icons/weather/svg/raindrop-measure.svg',
    element.appendChild(imageElement);
    element.appendChild(document.createTextNode(params.value));
    return element;
  };
  //cloud level
  const cloudlevel = (params) => {
    const element = document.createElement('span');

    // cloud level value
    if (params.value >=0.00 && params.value<=10) {
      element.appendChild(document.createTextNode('Sunny'));

    } 
    else if (params.value >=10.01 && params.value<=20 ) {
      element.appendChild(document.createTextNode('Fair'));
    }
    else if (params.value >=20.01 && params.value<=30) {
      element.appendChild(document.createTextNode('Mostly Sunny'));
    }
    else if (params.value >=30.01 && params.value<=60 ) {
    element.appendChild(document.createTextNode('Partly Cloudy'));
    }
    //Partly Cloudly
    else if (params.value >=60.01&& params.value<=70 ) {
      element.appendChild(document.createTextNode('Partly Sunny'));
    }
    else if (params.value >=70.01 && params.value<=90) {
      element.appendChild(document.createTextNode('Mostly cloudy'));
    }
    else if (params.value >=90.01 && params.value<=100) {
    element.appendChild(document.createTextNode('Overcast'));
    }
    else{
    element.appendChild(document.createTextNode("NA"))
    }
    return element;
  };
  
  //UV index
  const UVIndex = (params) => {
    const element = document.createElement('span');
    const imageElement = document.createElement('img');
    
    imageElement.width = 54;
    imageElement.height = 54;

    // uv index value
    if (params.value ==1) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-1.svg',
      element.appendChild(document.createTextNode('Low'));

    } 
    else if (params.value==0 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index.svg';
      element.appendChild(document.createTextNode('Safe'));
    }
    else if (params.value==2 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-2.svg';
      element.appendChild(document.createTextNode('Low'));
    }
    else if (params.value==3 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/uv-index-3.svg';
    element.appendChild(document.createTextNode('Moderate'));
    }
    //Partly Cloudly
    else if (params.value==4 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-4.svg';
      element.appendChild(document.createTextNode('Moderate'));
    }
    else if (params.value==5 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-5.svg';
      element.appendChild(document.createTextNode('Moderate'));
    }
    else if (params.value==6 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/uv-index-6.svg';
    element.appendChild(document.createTextNode('High'));
    }
    else if (params.value==7 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-7.svg';
      element.appendChild(document.createTextNode('High'));
    }
    else if (params.value==8 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/uv-index-8.svg';
    element.appendChild(document.createTextNode('Very High'));
    }
    else if (params.value==9 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-9.svg';
      element.appendChild(document.createTextNode('Very High'));
    }
    else if (params.value==10 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/uv-index-10.svg';
    element.appendChild(document.createTextNode('Very High'));
    }
    else if (params.value==11 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/uv-index-11.svg';
      element.appendChild(document.createTextNode('Extreme'));
    }
    else if (params.value>=12 ) {
        imageElement.src ='app-assets/images/icons/weather/svg/uv-index.svg';
        element.appendChild(document.createTextNode('Extreme'));
    }
    else{
      imageElement.src ='app-assets/images/icons/weather/svg/not-available.svg';
    }
    element.appendChild(imageElement);
    return element;
  };
  
  
  //Weather condition
  const weathercondition = (params) => {
    const element = document.createElement('span');
    const imageElement = document.createElement('img');
    
    imageElement.width = 54;
    imageElement.height = 54;

    // clear weather
    if (params.value ==1000) {
      imageElement.src ='app-assets/images/icons/weather/svg/clear-day.svg',
      element.appendChild(document.createTextNode('Clear'));

    } 
    //cloudy weather
    else if (params.value==1001 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/cloudy.svg';
      element.appendChild(document.createTextNode('Cloudy'));
    }
    //Mostly clear
    else if (params.value==1100 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/sunrise.svg';
    element.appendChild(document.createTextNode('Mostly clear'));
    }
    //Partly Cloudly
    else if (params.value==1101 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/partly-cloudy-day.svg';
      element.appendChild(document.createTextNode('Partly Cloudy'));
    }
    else if (params.value==1102 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/partly-cloudy-day.svg';
    element.appendChild(document.createTextNode('Mostly Cloudy'));
    }
    else if (params.value==2000 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/fog.svg';
      element.appendChild(document.createTextNode('Fog'));
    }
    else if (params.value==2100 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/fog-day.svg';
    element.appendChild(document.createTextNode('Light Fog'));
    }
    else if (params.value==3000 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/wind-beaufort-2.svg';
      element.appendChild(document.createTextNode('Light Wind'));
    }
    else if (params.value==3100 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/wind.svg';
    element.appendChild(document.createTextNode('Wind'));
    }
    else if (params.value==3002 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/wind-beaufort-8.svg';
      element.appendChild(document.createTextNode('Strong Wind'));
    }
    else if (params.value==4000 ) {
    imageElement.src ='app-assets/images/icons/weather/svg/drizzle.svg';
    element.appendChild(document.createTextNode('Drizzle'));
    }
    else if (params.value==4001 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/Rain.svg';
      element.appendChild(document.createTextNode('Rain'));
    }
    else if (params.value==4200 ) {
        imageElement.src ='app-assets/images/icons/weather/svg/raindrops.svg';
        element.appendChild(document.createTextNode('Light Rain'));
    }
    else if (params.value==4201 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/thunderstorms.svg';
      element.appendChild(document.createTextNode('Heavy Rain'));
    }   
    else if (params.value==8000 ) {
      imageElement.src ='app-assets/images/icons/weather/svg/thunderstorms-day-extreme.svg';
      element.appendChild(document.createTextNode('Thunderstorm'));
    }    
    else{
      imageElement.src ='app-assets/images/icons/weakconnection.png';
    }
    element.appendChild(imageElement);;
    return element;
  };
const columnDefs = [
  { headerName: 'Time',
   field: 'time', 
   sortable: true,
   filter: true,
   width: 250
  },
  { headerName: 'Temperature (C)', 
  field: 'temperature',
  sortable: true,
  filter: true,
  width: 200
  },
  { headerName: 'Humidity(%)',
   field: 'humidity',
   sortable: true,
   filter: true,
   width: 200,
   cellRenderer:humiditylevel
  },
  { headerName: 'Rain Probability(%))', 
  field: 'precipitationProbability', 
  sortable: true,
  filter: true,
  width: 220,
  cellRenderer: probrain},
  { headerName: 'Weather Condition', 
  field: 'weatherCode', 
  sortable: true,
  filter: true,
  width: 230,
  cellRenderer:weathercondition
  },
  { headerName: 'Cloud Cover', 
  field: 'cloudCover', 
  sortable: true,
  filter: true,
  width: 200,
  cellRenderer:cloudlevel},
  { headerName: 'UV Index', 
  field: 'uvIndex', 
  sortable: true,
  filter: true,
  width: 200,
  cellRenderer:UVIndex}
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
      precipitationProbability: hourly.values.precipitationProbability,
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
