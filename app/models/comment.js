import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr(),
  text: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
