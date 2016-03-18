var axios = require('axios');
var secretKey = 'd1d3fe0ea129f9c858ae7459472f4e15';
var forecastDays = 5;

function setCity(cityName) {
  return 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+
      cityName
    +'&type=accurate&APPID='+
      secretKey
    +'&cnt=' +
    forecastDays
}

var helpers = {
  getCityInfo: function (city) {
    return axios
      .get(setCity(city))
      .then(function(data){
        console.log(data);
      })
      .catch(function(err){
        console.warn('Error in getUserInfo', err)
      })
  }
};
module.exports = helpers;
