var React = require('react');
var styles = require('../styles');

function NavBar(props) {
  return (
      <div className="container-fluid">
        <nav className="navbar navbar-default" style={styles.navbarStyles}>
          <div className="navbar-header">
            <a className="navbar-brand" style={styles.brandColor} href="#">
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
        {props.children}
      </div>
    )
}

module.exports = NavBar;
