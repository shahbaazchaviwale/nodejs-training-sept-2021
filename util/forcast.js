const  request = require('request');

const forcast = (latitude, longitude, callback) => { 
    const url = 'http://api.weatherstack.com/current?access_key=a6a692d5f4094530005c919bf6d98feb&query='+latitude+','+longitude;
    request({url:  url, json: true}, (error, response) => {
        if(error){
            callback('No connection, please check ypur internet connection', undefined);
        }else if(response.body.error){
            callback('No location found, please search another ', undefined);
        }else{
            callback(undefined, 'currently climate is  '+response.body.current.weather_descriptions[0] + ' & temperature ' +response.body.current.temperature);
        }
    });
}

module.exports = forcast;