import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newComment() {
      var params = {
        email: this.get('email'),
        comment: this.get('comment'),
        post: this.get('post')
      };
      this.sendAction('sendNewComment', params);
    }
  }
});
