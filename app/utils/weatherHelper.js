var axios = require('axios');
var url = 'http://api.openweathermap.org/data/2.5/weather?&type=accurate&APPID=d1d3fe0ea129f9c858ae7459472f4e15&cnt=5&q='

var helpers = {
  getCityInfo: function (city) {
    return axios
      .get(url + city)
      .then(function(data){
        console.log(data);
      })
      .catch(function(err){
        console.warn('Error in getUserInfo', err)
      })
  }
};
module.exports = helpers;
