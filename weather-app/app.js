const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
        weather.getWeather(results.latitude,  results.longitude, (errorMessage, weatherResults)=> {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                // console.log(JSON.stringify(weatherResults, undefined, 2));
                console.log(`At ${results.address} Its currently ${weatherResults.temperature} but it feels like ${weatherResults.apparentTemperature}`);
            }
        });
    }
});

//dec04c114ec400932926bb3ffdac8cbe

//https://api.darksky.net/forecast/[dec04c114ec400932926bb3ffdac8cbe]/[37.3357192],[-121.8867076]


