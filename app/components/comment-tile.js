import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCommentOnPost(params, comment){
      this.sendAction('updateCommentOnPost', params, comment);
    },
    deleteComment(comment, post) {
      console.log(post);
      this.sendAction('deleteCommentOnPost', comment, post);
    }
  }
});
