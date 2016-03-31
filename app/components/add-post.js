import Ember from 'ember';

export default Ember.Component.extend({
  isCreatePostShowing: false,
  tag: "coop",
  actions: {
    showCreatePost() {
      this.set('isCreatePostShowing', true);
    },
    createRecord() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        body: this.get('body') ? this.get('body') : "",
        date: this.get('date') ? this.get('date') : "",
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        tag: this.get('tag') ? this.get('tag') : "",
        comments: []
      };
      this.sendAction('createRecord', params);
      this.set('isCreatePostShowing', false);
    },
    addTag() {
      console.log(this.get('name'));
    },
    selectTag() {
      this.set('tag', event.target.value);
    }

  }
});
