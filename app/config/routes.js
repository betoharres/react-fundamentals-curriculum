var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../containers/Main');

var HomeContainer = require('../containers/HomeContainer');
var CityContainer = require('../containers/CityContainer');
var CityDetails = require('../components/CityDetails');

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={HomeContainer} />
        <Route path="/tempo/:city" component={CityContainer} />
        <Route path="/tempo/:city/details" component={CityDetails} />
      </Route>
    </Router>

    );

module.exports = routes;
