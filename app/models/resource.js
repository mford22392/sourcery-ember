import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  link: DS.attr('string'),
  resource: DS.belongsTo('group', {async: true}),
  user: DS.belongsTo('user', {async: true}),
  comments: DS.hasMany('comment', {async: true}),
});
