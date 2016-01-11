//namespacing
var app = app || {};
var active = active || {};

app.Model = Backbone.Model.extend({
});  // this needs to go first bc of hoisting the _id issue

// define my 4 important parts!
app.Collection = Backbone.Collection.extend({
  model: app.Model, // what type of models will this collection hold?
  url: '/recipes',
  initialize: function() {
    var self = this;
    this.on('change', function() {
      console.log('Our Collection changed.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('sync', function() {
      console.log('Our Collection synced with the API.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    // get data from the API
    this.fetch();
  }
});

app.CollectionView = Backbone.View.extend({
  el: $('#recipe-listing'),
  initialize: function(){
    console.log('CollectionView is a go.');
    // When loaded, render immediately.
    this.render()
  },
  render: function(){
  console.log('CollectionView is rendering.');
  var models = this.collection.models; // We expect our CollectionView to be bound to a Collection.
  for (var inc in models) {
    new app.ModelView({
      model: models[inc],
      el: this.el
    });
  };
  }

});

// mongoDB support!
Backbone.Model.idAttribute = "_id";

// the document is ready
$(document).ready(function(){
  active.collection = new app.Collection();
  active.createRecipeView = new app.addRecipeView({
      collection: active.collection
    });
});
