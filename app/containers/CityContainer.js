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
      forecasts: [],
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
    }.bind(this))
  },

  handleCityDetails: function (data) {
    this.context.router.push({
      pathname: '/tempo/' + this.state.city + "/details",
      state: {
        weather: data
      }
    });
  },

  render: function() {
    return (
      <City
        name={this.state.city}
        forecasts={this.state.forecasts}
        onCityDetails={this.handleCityDetails}
        isLoading={this.state.isLoading}
      />
    )
  }
});

module.exports = CityContainer;
