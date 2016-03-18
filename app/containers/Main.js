var React = require('React');
var styles = require('../styles');
var Home = require('../components/Home');
var NavBar = require('../components/NavBar');

var Main = React.createClass({

  render: function() {
    return (
      <div id="main-container">
        <NavBar>
          {this.props.children}
        </NavBar>
      </div>
    )
  }
});

module.exports = Main;
