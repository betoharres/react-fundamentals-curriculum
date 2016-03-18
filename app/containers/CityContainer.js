var React = require('react');
var City = require('../components/City');
var weatherHelper = require('../utils/weatherHelper');

var CityContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      city: ''
    }
  },
  componentDidMount: function() {
    var city = this.props.routeParams.city;
    weatherHelper.getCityInfo(city)
    .then(function(forecasts) {
      this.setState({
        city: city,
        forecasts: forecasts
      });
      console.log(forecasts);
    }.bind(this))
  },

  render: function() {
    return (
      <City name={this.state.city} />
    )
  }
});

module.exports = CityContainer;
