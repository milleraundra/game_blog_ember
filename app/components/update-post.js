import Ember from 'ember';

export default Ember.Component.extend({
  isUpdateFormShowing: false,
  tag: undefined,
  actions: {
    sendUpdate(post) {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        date: this.get('date') ? this.get('date') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        tag: this.get('tag') ? this.get('tag') : "",
      };
      this.sendAction('update', post, params);
      this.set('isUpdateFormShowing', false);
    },
    showForm() {
      this.set('isUpdateFormShowing', true);
    },
    selectTag() {
      this.set('tag', event.target.value);
      console.log(this.tag);
    }

  }
});
