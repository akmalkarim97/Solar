const options = {
  method: 'GET',
  headers: { accept: 'application/json' },
};

fetch('https://api.tomorrow.io/v4/weather/forecast?location=iskandar%20puteri&timesteps=hourly&apikey=4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY', options)
  .then(response => response.json())
  .then(data => {
    const hourlyForecast = data.timelines.hourly;

    // Log the hourly forecast data to the console
    console.log(hourlyForecast);
  })
  .catch(err => console.error(err));
