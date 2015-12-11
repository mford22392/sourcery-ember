import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr('string'),
  description: DS.attr('string'),
  resources: DS.hasMany('resource', {async: true}),
  users: DS.hasMany('user', {async: true}),
});
