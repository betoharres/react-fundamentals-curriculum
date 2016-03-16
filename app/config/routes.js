var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../containers/Main');
var Home = require('../components/Home');
var City = require('../components/City');

var routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="/hue" component={City} />
      </Route>
    </Router>

    );

module.exports = routes;
