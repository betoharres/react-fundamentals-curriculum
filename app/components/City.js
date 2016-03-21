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
        {props.forecasts.map(
          function(forecast){
            return <Day key={forecast.dt} unixtime={forecast.dt} forecast={forecast.weather[0]} />
          })
        }
      </div>
    )
  }
}

City.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  forecasts: PropTypes.object.isRequired
}

module.exports = City;
