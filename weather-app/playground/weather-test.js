const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/dec04c114ec400932926bb3ffdac8cbe/37.3357192,-121.8867076',
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200){
        console.log(body.currently.temperature);
    }else{
        console.log('Unable to fetch weather.');
    }
})

