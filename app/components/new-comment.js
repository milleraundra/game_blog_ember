import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newComment() {
      var params = {
        email: this.get('email'),
        text: this.get('comment'),
        post: this.get('post')
      };
      console.log(params);
      this.sendAction('sendNewComment', params);
    }
  }
});
