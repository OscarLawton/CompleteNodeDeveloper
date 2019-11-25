const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const mapUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW1tZXRsIiwiYSI6ImNrMmV6ZGtpMzBkbjgzY3JhZXU5ZmdjeHgifQ.DAimm7Ny6FJ-mQhNtMgF-Q';

const url = 'https://api.darksky.net/forecast/5997d70a4f5f5214ea0b453532c5fb88/53.9897,7.asdf'



/* request({url: url, json: true}, (err, res)=>{
  //console.log(res.body.currently)
  //console.log('It is currently ' + res.body.currently.temperature + ' degrees out, with ' + res.body.currently.precipProbability + '% chance of rain.');
  //console.log(res.body.daily.data[0].summary)
  if(err){
    console.log(err);
  } else if(res.body.code){
    console.log(res.body.error);
  }
  else {
    console.log('It is currently ' + res.body.currently.temperature + ' degrees out, with ' + res.body.currently.precipProbability + '% chance of rain.');
    console.log(res.body.daily.data[0].summary)
  }
}); */

/*  request({url: mapUrl, json: true}, (err, res) =>{
  if(err){
    console.log(err);
  } else if(res.body.code){
    console.log(res.body.error);
  }
  else {
    console.log(res.body.features[0].center);
  }
  
}); 
 */
if(process.argv.length > 2){
  const location = process.argv[2];
  geocode(location, (err, {latitude, longitude, place_name} ) => {
    
    
    if(err){
      return console.log(err);
    }
  
    forecast(latitude,longitude,(err, forecastData) =>{
      if(err){
        return console.log(err);
      }
      console.log (place_name);
      console.log('data', forecastData);
    });
  });  

}


