var React = require('react');
var City = require('../components/City');
var weatherHelper = require('../utils/weatherHelper');

var CityContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      city: '',
      isLoading: true
    }
  },
  componentDidMount: function() {
    var city = this.props.routeParams.city;
    weatherHelper.getCityInfo(city)
    .then(function(forecasts) {
      this.setState({
        city: city,
        forecasts: forecasts,
        isLoading: false
      });
      console.log(forecasts);
    }.bind(this))
  },

  render: function() {
    return (
      <City
        name={this.state.city}
        forecasts={this.state.forecasts}
        isLoading={this.state.isLoading}
      />
    )
  }
});

module.exports = CityContainer;
