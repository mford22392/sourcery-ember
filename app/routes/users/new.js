import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },
  actions: {
    save(model){
        model.save().then((user) => {
          this.transitionTo('users.user', user);
      });
    }
  }
});
