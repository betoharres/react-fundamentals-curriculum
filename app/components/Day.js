var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');

function unixTimestampToDate(time) {

  var daysOfWeek = {
    0: 'Dom',
    1: 'Seg',
    2: 'Ter',
    3: 'Quar',
    4: 'Qui',
    5: 'Sex',
    6: 'Sab',
  };

  var monthsToPt = {
    0: 'Jan',
    1: 'Fev',
    2: 'Mar',
    3: 'Abr',
    4: 'Mai',
    5: 'Jun',
    6: 'Jul',
    7: 'Ago',
    8: 'Set',
    9: 'Out',
    10: 'Nov',
    11: 'Dez'
  };

  var date = new Date(time * 1000)
  return daysOfWeek[date.getDay()];
}

function WeatherIcon(props) {
  var url = './app/images/weather-icons/' + props.icon + '.svg';
  return (
    <div>
      <img style={styles.dayItem} src={url} />
    </div>
  )
}

function Day(props) {
  return (
    <div className="text-center">
      <div className="lead" style={styles.dayWeekTitle}>{unixTimestampToDate(props.unixtime)}</div>
      <h3>{props.forecast.description}</h3>
      <WeatherIcon icon={props.forecast.icon} />
      <hr/>
    </div>
  );
}

Day.propTypes = {
  unixtime: PropTypes.number.isRequired,
  forecast: PropTypes.object.isRequired
}

module.exports = Day;
