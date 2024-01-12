  const columnDefs = [
    { headerName: 'Time', field: 'time', minWidth: 180 },
    { headerName: 'Temperature', field: 'values.temperature' },
    { headerName: 'Humidity', field: 'values.humidity' },
    { headerName: 'Rain Intensity', field: 'values.rainIntensity', minWidth: 150 },
    { headerName: 'Weather Condition', field: 'values.weathercode', minWidth: 150 }
  ];

  const gridOptions = {
    columnDefs: columnDefs,
    enableSorting: true,
    enableFilter: true,
    pagination: true
  };

  const eGridDiv = document.querySelector('#myGrid');

  const options = {method: 'GET', headers: {accept: 'application/json'}};
  
  const apiKey = '4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY';
  const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=johor%20bahru&timesteps=hourly&apikey=${apiKey}`;
  new agGrid.Grid(eGridDiv, gridOptions);

  fetch(apiUrl,options)
    .then(response => response.json())
    .then((data) =>{
    
      const minutelydata = data.timelines.minutely;

      for (const minute of minutelydata){
        const formattedMinute ={
          time :minute.time,
          values: minute.values,
        };
        console.log(formattedMinute)
      }
    })
    .catch((err) => console.log(err));