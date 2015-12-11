import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('group');
  },
  actions: {
    save(model){
        model.save().then((group) => {
          this.transitionTo('groups.group', group);
      });
    }
  }
});
