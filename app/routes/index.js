import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    saveData() {
      var params = {
        title: "New Game: Blokus Trigon",
        body: "Lorem ipsum dolor si amet",
        date: "2016-03-31",
        author: "Torrence Stratton",
        image: "http://lorempixel.com/400/200"
      };

      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    createPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');      
    }
  }
});
