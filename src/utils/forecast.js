const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=81b0fc3d8fe2d9bb76cec1cf319b66a8&query=' + latitude + ',' + longitude
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {name:body.location.name, temp:body.current.temperature})
        }
    })
}

module.exports = forecast