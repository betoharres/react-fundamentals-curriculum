var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({

  render: function() {
    return (
      <h1>Hello Wolrd!</h1>
    )
  }
});

ReactDOM.render(
                <HelloWorld />,
                document.getElementById('app')
                );
