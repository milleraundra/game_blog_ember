import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment'),
      allPosts: this.store.findAll('post').then(function(posts) {
        posts.forEach(function(post) {
          // for (var i = 0; i < array.length; i++) {
          //   array[i]
          // }
          // if(post.comments.length >= 1) {
            console.log(post.comments);
          // }
        })
        //var allPosts = post.get('comments');
      })

    });
  },
  actions: {
    createPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});

// https://guides.emberjs.com/v2.4.0/models/finding-records/
