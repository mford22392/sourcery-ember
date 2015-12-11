import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  resource: DS.belongsTo('resource', {async: true}),
  user: DS.belongsTo('user', {async: true}),
});
