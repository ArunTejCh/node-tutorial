const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a:{
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);

var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}&key=AIzaSyDha5PamIDtJzuU81ou9uuJKowSsTVi-NY`;

axios.get(geoCodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS'){
        throw new Error('Unable to find that address');
    }
    console.log(response.data);

     var lat = response.data.results[0].geometry.location.lat;
     var long = response.data.results[0].geometry.location.lng;
     var weatherUrl = `https://api.darksky.net/forecast/dec04c114ec400932926bb3ffdac8cbe/${lat},${long}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);

}).then((response) => {
    var temp = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;

    console.log(); console.log(`Its currently ${temp} but it feels like ${appTemp}`);

}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API.');
    }
})

//dec04c114ec400932926bb3ffdac8cbe

//https://api.darksky.net/forecast/[dec04c114ec400932926bb3ffdac8cbe]/[37.3357192],[-121.8867076]


