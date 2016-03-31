import Ember from 'ember';

export default Ember.Component.extend({
  topPosts: Ember.computed('posts.@each.comments', function() {
    return this.get('posts').filter(function(post) {
      return post.get('comments.length') > 1;
    });
  }),

  actions: {
    viewInput(allposts) {
      allposts.forEach(function(post) {
        console.log(post);
      });
    }
  }

});
