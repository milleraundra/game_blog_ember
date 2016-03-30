import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createRecord() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        author: this.get('author'),
        image: this.get('image')
      };
      this.sendAction('createRecord', params)
    }
  }
});
