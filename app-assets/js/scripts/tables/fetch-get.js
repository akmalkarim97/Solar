const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.tomorrow.io/v4/weather/forecast?location=johor%20bahru&timesteps=hourly&apikey=4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));