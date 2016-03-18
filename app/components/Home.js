var React = require('react');
var Link = require('react-router').Link;
var styles = require('../styles');
function Home (props) {
  return (
    <div className="row">
      <div className="col-sm-4 col-sm-offset-4">
        <h1 className="text-center">Tempo na sua cidade</h1>
        <hr />
        <form
          onSubmit={props.onSubmitCity}
        >
          <input
            type="text"
            className="form-control"
            value={props.city}
            onChange={props.onUpdateCity}
            placeholder="Rio de Janeiro, Brazil"
            />
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
