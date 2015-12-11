import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  gmail_name: DS.attr('string'),
  groups: DS.hasMany('group', {async: true}),
  resources: DS.hasMany('resource', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
});
