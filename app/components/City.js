var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var Day = require('./Day');
var styles = require('../styles');

function City(props) {
  if (props.isLoading === true ){
    return (
      <Loading />
    )
  }else{
    return(
      <div>
        <h1 className="lead text-center" style={styles.cityTitle}>{props.name}</h1>
        <hr/>
        {props.forecasts.map(
          function(forecast){
            return (
                <div key={forecast.dt} onClick={props.onCityDetails.bind(null, forecast)}>
                  <Day key={forecast.dt} unixtime={forecast.dt} forecast={forecast.weather[0]} />
                </div>
                )
          })
        }
      </div>
    )
  }
}

City.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onCityDetails: PropTypes.func.isRequired,
  forecasts: PropTypes.array.isRequired
}

module.exports = City;
