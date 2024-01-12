import requests
import numpy as np
import pandas as pd

#Get data from api 
url = "https://api.tomorrow.io/v4/weather/forecast?location=johor%20bahru&timesteps=hourly&apikey=4kAWRFCICCtAw2Aj8FquB9kv9laRuVcY"
headers = {"accept": "application/json"}
response = requests.get(url, headers=headers)

#Change the data into json
data=response.json()

#select the key value json data that contains weather value, humidity, etc
weatherdata1=pd.json_normalize(data['timelines']['hourly']) 

#location data
weatherdata_place=pd.json_normalize(data['location'])

#Set as a dataframe
#value Data
WeatherData=pd.DataFrame(weatherdata1)

#Place
PlaceData=pd.DataFrame(data['location'])






