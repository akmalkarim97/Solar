const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch(
  'https://api.tomorrow.io/v4/weather/forecast?location=johor%20bahru&timesteps=hourly&apikey=4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY',
   options
   )
  .then(response => response.json())
  .then((data) => {
    const minutelyData = data.timelines.minutely;
    for (const minute of minutelyData){
      const formattedMinute ={
        time :minute.time,
        values: minute.values,
      };
      console.log(formattedMinute)
    }
  })
  .catch((err) => console.log(err));

