import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCommentOnPost(params, comment){
      this.sendAction('updateCommentOnPost', params, comment);
    }
  }
});
