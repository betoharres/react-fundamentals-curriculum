var React = require('react');
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

module.exports = City;
