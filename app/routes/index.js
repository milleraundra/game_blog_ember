import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      comments: this.store.findAll('comment')
    });
  },
  actions: {
    // saveData() {
    //   var params = {
    //     title: "New Game: Blokus Trigon",
    //     body: "Lorem ipsum dolor si amet",
    //     date: "2016-03-31",
    //     author: "Torrence Stratton",
    //     image: "http://lorempixel.com/400/200"
    //   };
    //
    //   var newPost = this.store.createRecord('post', params);
    //   newPost.save();
    //   this.transitionTo('index');
    // },
    // saveComment() {
    //   var params = {
    //     email: 'yourexample@domain.com',
    //     text: 'I love this game! You should come play with me sometime.',
    //     post: {}
    //   };
    //   console.log("SaveComment, " + params.email);
    //   console.log("SaveComment, " + params.text);
    //   var newComment = this.store.createRecord('comment', params);
    //   newComment.save();
    //   this.transitionTo('index');
    // },
    createPost(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
