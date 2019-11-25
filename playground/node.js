const https = require('https');
const url = 'https://api.darksky.net/forecast/5997d70a4f5f5214ea0b453532c5fb88/45,45'

const request = https.request(url, (res) => {
    let data = ''
    res.on('data', (wut) => {
        data = data + wut.toString();
    })
    res.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (err) => {
    console.log("There was an error: ", err)
})
request.end()