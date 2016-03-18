var React = require('react');
var Home = require('../components/Home');

var HomeContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      city: ''
    }
  },

  handleUpdateCity: function(e){
    this.setState({
      city: e.target.value
    })
  },

  handleSubmitCity: function (e) {
    e.preventDefault();
    var city = this.state.city;
    this.setState({
      city: ''
    });

    this.context.router.push('/tempo/' + this.state.city );
  },

  render: function() {
    return (
      <Home
        city={this.state.city}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
      />
    )
  }
});

module.exports = HomeContainer;
