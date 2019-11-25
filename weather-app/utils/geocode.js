const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZW1tZXRsIiwiYSI6ImNrMmV6ZGtpMzBkbjgzY3JhZXU5ZmdjeHgifQ.DAimm7Ny6FJ-mQhNtMgF-Q';
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZW1tZXRsIiwiYSI6ImNrMmV6ZGtpMzBkbjgzY3JhZXU5ZmdjeHgifQ.DAimm7Ny6FJ-mQhNtMgF-Q';
  
    /* const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1' */
    request({url, json: true}, (err, {body}) => {
      
      const {features} = body;
      const {length, place_name, center} = features[0];
      const latitude = center[0];
      const longitude = center[1];
     
      if(err){
        callback('Unable to connect to location services!', undefined)
      } else if(length === 0){
        callback('Unable to connect to location. Try another search.', undefined);
      } else {
        
        callback(undefined, {
          latitude,
          longitude,
          place_name
        })
      }
    })
  }
  
 module.exports = geocode;