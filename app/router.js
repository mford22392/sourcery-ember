import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('resources', function() {
    this.route('resource', {path: ":resource_id"});
  });

  this.route('users', function() {
    this.route('user', {path: ":user_id"});
  });

  this.route('groups', function() {
    this.route('group', {path: ":group_id"});
    this.route('new');
  });
});

export default Router;
