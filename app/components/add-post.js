import Ember from 'ember';

export default Ember.Component.extend({
  isCreatePostShowing: false,
  actions: {
    showCreatePost() {
      this.set('isCreatePostShowing', true);
    },
    createRecord() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        author: this.get('author'),
        image: this.get('image')
      };
      this.sendAction('createRecord', params);
      this.set('isCreatePostShowing', false);
    }
  }
});
