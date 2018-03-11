const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/dec04c114ec400932926bb3ffdac8cbe/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            //console.log(body.currently.temperature);
        }else{
            callback('Unable to fetch weather.')
            // console.log('Unable to fetch weather.');
        }
    })
}

module.exports = {
    getWeather
}