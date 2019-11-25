const request = require('request')

const forecast = (lat, long, callB) =>{
    
    const url = 'https://api.darksky.net/forecast/5997d70a4f5f5214ea0b453532c5fb88/'+ lat +',' + long;
    request({url, json: true}, (err, {body}) => {
        
        const {code, error, latitude, longitude, currently} = body;
        const {summary} = currently;
        if(err){
          callB('Unable to connect to location services!', undefined)
        } else if(code === 400){
            callB(error, undefined)
        } else {
         /*  console.log(res.body.latitude);
          console.log(res.body.longtitude);
          console.log(res.body.currently.summary); */
          callB(undefined, {
            latitude,
            longitude,
            summary
          })
        }
    })
}

module.exports = forecast;