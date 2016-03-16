var React = require('react');
var NavBar = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              ClimaTempo
            </a>
          </div>
          <form className="navbar-form navbar-right form-inline" role="search">
            <div className="form-group">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Rio de Janeiro, Brazil" />
              </div>
            </div>
            <button type="submit" className="btn btn-success">Ver Tempo</button>
          </form>
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = NavBar;
