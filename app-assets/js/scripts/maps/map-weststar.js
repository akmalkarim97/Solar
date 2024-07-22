// Layer Control - Weststar Sirehpark and pulai perdana
  // --------------------------------------------------------------------
  $(function () {
    'use strict';

    var jsonData = {
      "IDSP60_01": {"name": "SP60_01", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","BatteryPercentage":90,"Carbon_Emission":0.001,"Brightness":0,"TimeUpdate":"21/12/2023, 16:30:00"},
      "IDSP60_02": {"name": "SP60_02", "Light": "OFF","Connectivity":"Excellent Signal","ChargingStatus":"Charging","Problem":"None","BatteryPercentage":80,"Carbon_Emission":0.001,"Brightness":0,"TimeUpdate":"21/12/2023, 17:00:00"},
      "IDSP60_04": {"name": "SP60_04", "Light": "OFF","Connectivity":"Good Signal","ChargingStatus":"Charging","Problem":"Battery Discharging","Carbon_Emission":0.001,"Battery Percentage":90,"Brightness":0,"TimeUpdate":"21/12/2023, 14:00:00"},
      "IDSP60_20": {"name": "SP60_20", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":90,"Brightness":0,"TimeUpdate":"21/12/2023, 17:00:30"},
      "IDSP60_07": {"name": "SP60_07", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":40,"Brightness":0,"TimeUpdate":"21/12/2023, 17:00:00"},
      "IDSP60_08": {"name": "SP60_08", "Light": "OFF","Connectivity":"Weak Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":40,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP60_19": {"name": "SP60_19", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":50,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP60_18": {"name": "SP60_18", "Light": "OFF","Connectivity":"Excellant Signal","ChargingStatus":"Charging","Problem":"Battery Discharging","Carbon_Emission":0.001,"Brightness":0,"Battery Percentage":90,"Time Update":"21/12/2023, 16:00:00"},
      "IDSP60_27": {"name": "SP60_27", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":60,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP60_10": {"name": "SP60_10", "Light": "OFF","Connectivity":"Excellant Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":70,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP60_17": {"name": "SP60_17", "Light": "OFF","Connectivity":"Average Signal","ChargingStatus":"Charging","Problem":"None","Carbon_Emission":0.001,"BatteryPercentage":85,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP60_05": {"name": "SP60_05", "Light": "OFF","Connectivity":"Good Signal","ChargingStatus":"Charging","Problem":"High Temperature","Carbon_Emission":0.001,"BatteryPercentage":81,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"},
      "IDSP80_05": {"name": "SP80_05", "Light": "OFF","Connectivity":"Good Signal","ChargingStatus":"Discharging","Problem":"High Temperature","Carbon_Emission":0.001,"BatteryPercentage":61,"Brightness":0,"TimeUpdate":"21/12/2023, 16:00:00"}
    };

    function createMarker(lat, lng, id) {
var marker = L.marker([lat, lng]);
var popupContent = '<strong>Device ID:</strong> ' + jsonData[id].name + '<br>' +
  '<strong>Light:</strong> ' + jsonData[id].Light + '<br>' +
  '<strong>Brightness:</strong> ' + jsonData[id].Brightness + '%'+'<br>' +
  '<strong>Connectivity:</strong> ' + jsonData[id].Connectivity + '<br>' +
  '<strong>Charging Status:</strong> ' + jsonData[id].ChargingStatus + '<br>' +
  '<strong>Problem:</strong> ' + jsonData[id].Problem + '<br>' +
  '<strong>Carbon Emission:</strong> ' + jsonData[id].Carbon_Emission +"Kg" +'<br>' +
  '<strong>Battery Percentage:</strong> ' + jsonData[id].BatteryPercentage + '%'+ '<br>' +
  '<strong>Time Update:</strong> ' + jsonData[id].TimeUpdate + '<br>';

marker.bindPopup(popupContent);
return marker;
}

    var IDSP60_01 = createMarker(1.4655, 103.6441, "IDSP60_01"),
      IDSP60_02 = createMarker(1.4656, 103.6439, "IDSP60_02"),
      IDSP60_04 = createMarker(1.4653, 103.6434, "IDSP60_04"),
      IDSP60_20 = createMarker(1.4653, 103.6429, "IDSP60_20"),
      IDSP60_07 = createMarker(1.4652, 103.6430, "IDSP60_07"),
      IDSP60_08 = createMarker(1.4651, 103.6430, "IDSP60_08"),
      IDSP60_19 = createMarker(1.4651, 103.6428, "IDSP60_19"),
      IDSP60_18 = createMarker(1.4649, 103.6427, "IDSP60_18"),
      IDSP60_27 = createMarker(1.4649, 103.6429, "IDSP60_27"),
      IDSP60_10 = createMarker(1.4648, 103.6428, "IDSP60_10"),
      IDSP60_17 = createMarker(1.4647, 103.6427, "IDSP60_17"),
      IDSP80_05 = createMarker(1.4650, 103.6431, "IDSP80_05"),
      IDSP60_05 = createMarker(1.4652, 103.6434, "IDSP60_05");

    var wat60 = L.layerGroup([IDSP60_01, IDSP60_02, IDSP60_04, IDSP60_08, IDSP60_10, IDSP60_17, IDSP60_19, IDSP60_18, IDSP60_27, IDSP60_07, IDSP60_20,IDSP60_05]);

    var wat80 = L.layerGroup([IDSP80_05])

    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      maxZoom: 20
    });

    var layerControl = L.map('layer-control', {
      center: [1.4656524639668745, 103.64389627928813],
      zoom: 18,
      layers: [street, wat60,wat80]
    });

    var baseMaps = {
      Street: street
    };

    var overlayMaps = {
      Watt60: wat60,
      watt80: wat80
  
    };

    L.control.layers(baseMaps, overlayMaps).addTo(layerControl);

  });