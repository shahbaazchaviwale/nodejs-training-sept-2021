const request = require('request');

// weatherstack url
const weatherUrl = 'http://api.weatherstack.com/current?access_key=a6a692d5f4094530005c919bf6d98feb&query=42.3605,-71.0596';
request({url: weatherUrl, json: true}, (err, res) =>{
    if(err){
        console.log('Unable to connect network, please check your network connection');
    }else if(res.body.error){
        console.log(res.body.error.info);
    }else{
        console.log('Today is ',res.body.current.weather_descriptions[0], ' & temperature ', res.body.current.temperature);
    }
});

// mapbox url
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/karnataka.json?access_token=pk.eyJ1Ijoic2hhaGJhYXpjIiwiYSI6ImNrcmx5c3BiazFlZG0ydnJ2NDNsdTB1aXYifQ.hZ6hDqvF8h2aSlVq_WhB1Q';

request({url: mapboxUrl, json: true}, (err, res) => {
    if(err){
        console.log('Unable to connect network, please check your network connection');
    }else{
        console.log(res.body.features[0].place_name, 
            'has logitude ', res.body.features[0].center[0].toFixed(4), 
            'latitude ', res.body.features[0].center[1].toFixed(4));
    }
    
});
