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
    this.setState({
      city: city
    });
    weatherHelper.getCityInfo(city);
  },

  render: function() {
    return (
      <City name={this.state.city} />
    )
  }
});

module.exports = CityContainer;
