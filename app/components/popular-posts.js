import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    viewInput(allposts) {
      allposts.forEach(function(post) {
        console.log(post);
      });
    }
  }

});
