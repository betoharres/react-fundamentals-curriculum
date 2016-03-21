var React = require('react');
var PropTypes = React.PropTypes;

function unixTimestampToDate(time) {
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
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  return day + ' de ' + monthsToPt[month];
}

function WeatherIcon(props) {
  var url = './app/images/weather-icons/' + props.icon + '.svg';
  return (
    <img src={url} alt="" />
  )
}

function Day(props) {
  return (
    <div>
      <div>{unixTimestampToDate(props.unixtime)}</div>
      <WeatherIcon icon={props.forecast.icon} />
    </div>
  );
}

// Day.propTypes = {
//   key: PropTypes.integer.isRequired,
//   unixtime: PropTypes.integer.isRequired,
//   forecast: PropTypes.object.isRequired
// }

module.exports = Day;
