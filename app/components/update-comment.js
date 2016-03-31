import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentFormIsShowing: false,

  actions: {
    updateComment(comment) {
      var params = {
        email: this.get('email') ? this.get('email') : "",
        text: this.get('text') ? this.get('text') : "",
        post: this.get('comment.post')
      };
      console.log(params);
        this.sendAction('updateCommentOnPost', params, comment);
        this.set('updateCommentFormIsShowing', false);
    },
    newComment() {
      this.set('updateCommentFormIsShowing', true);
    }
  }
});
