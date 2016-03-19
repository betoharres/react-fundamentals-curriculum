var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var styles = require('../styles');

function City(props) {
  if (props.isLoading === true ){
    return (
      <Loading />
    )
  }else{
    return(
      <div>Loaded</div>
    )
  }
}

City.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  forecasts: PropTypes.array.isRequired
}

module.exports = City;
