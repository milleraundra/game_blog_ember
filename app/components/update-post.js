import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateFormShowing: false,

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
      this.set('isUpdateFormShowing', false);
    },
    showForm() {
      this.set('isUpdateFormShowing', true);
    }
  }
});
