var React = require('react');
var PropTypes = React.PropTypes;

function CityDetails(props) {
  console.log(props.location.state.weather);
  return (
      <div>
      </div>
  )
}

// CityDetails.propTypes = {
//   forecast: PropTypes.object.isRequired
// }

module.exports = CityDetails;
