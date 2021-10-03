const request = require('request');
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2hhaGJhYXpjIiwiYSI6ImNrcmx5c3BiazFlZG0ydnJ2NDNsdTB1aXYifQ.hZ6hDqvF8h2aSlVq_WhB1Q';
    request({url: url, json:true}, (error, response) => {
        if(error){
            callback('No connection, please check ypur internet connection', undefined);
        }else if(response.body.features.length == 0){
            callback('No location found, please search another ', undefined);

        }else{
            callback(undefined,{
               location: response.body.features[0].place_name, 
               logitude: response.body.features[0].center[0].toFixed(4), 
               latitude: response.body.features[0].center[1].toFixed(4)
            });
        }
    });
};
 module.exports = geoCode;