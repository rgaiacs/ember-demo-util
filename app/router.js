import EmberRouter from '@ember/routing/router';
import config from 'ember-demo-util/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('person', function () {
    this.route('class');
    this.route('pojo');
  });
});
