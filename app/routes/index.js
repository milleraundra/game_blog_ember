import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment'),
      // topPosts: this.store.findAll('post').then(function(posts) {
      //   debugger;
      //   return posts.filterBy('comments.length', 1);
      //   //var allPosts = post.get('comments');
      // })

    });
  },

  actions: {
    createPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    },
    viewPopularPost(post) {
      this.transitionTo('single-post', post.id);
    }
  }
});

// https://guides.emberjs.com/v2.4.0/models/finding-records/
