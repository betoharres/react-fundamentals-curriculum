var React = require('react');
var styles = require('../styles');
function Home (props) {
  return (
    <div className="row">
      <div className="col-sm-4 col-sm-offset-4">
        <h1>Tempo na sua cidade</h1>
        <hr />
        <form className="" role="search">
          <input type="text" className="form-control" placeholder="Rio de Janeiro, Brazil" />
              <hr />
          <div className="row">
            <div className="col-xs-4 col-xs-offset-4">
              <button type="submit" className="btn btn-success">Ver Tempo</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

module.exports = Home;
