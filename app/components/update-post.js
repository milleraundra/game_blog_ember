import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendUpdate(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.sendAction('update', post, params);
    }
  }
});
