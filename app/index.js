var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({

  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                ClimaTempo
              </a>
            </div>
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Rio de Janeiro, Brazil" />
              </div>
              <button type="submit" className="btn btn-success">Get Weather</button>
            </form>
          </div>
        </nav>
        <div className="center-container">
          <h1>Tempo na sua cidade</h1>
          <form className="" role="search">
            <input type="text" className="form-control" placeholder="Rio de Janeiro, Brazil" />
            <button type="submit" className="btn btn-success">Get Weather</button>
          </form>
        </div>
      </div>
    )
  }
});

ReactDOM.render(
                <HelloWorld />,
                document.getElementById('app')
                );
