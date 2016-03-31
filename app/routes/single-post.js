import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    updatePost(post, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]){
          post.set(key, params[key]);
        }
      });
      post.save();
      this.transitionTo('single-post');
    },
    deletePost(post) {
      if(confirm("Are you sure you want to delete this post?")) {
        post.destroyRecord();
        this.transitionTo('index');
      }
    },
    createNewComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var post = params.post;
      console.log(post);
      post.get('comments').addObject(newComment);
      newComment.save().then(function() {
        return post.save();
      });
      this.transitionTo('single-post');
    }
  }
});
