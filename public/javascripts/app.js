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

var allTags = [];

app.ModelView = Backbone.View.extend({
  initialize: function(){
    console.log('ModelView has been instantiated.');
    this.render();
  },
  render: function(){
    console.log('ModelView is rendering.');
    var data = this.model.attributes;
    allTags.push(data.NameOfDish);
    var newFilter = data.Restaurant
    var found = jQuery.inArray(newFilter, allTags);
    if (found >= 0) {
    } else {
        // Element was not found, add it.
        allTags.push(newFilter);
    }
    for (var i = 0; i < data.Tags.length; i++) {
      var newFilter = data.Tags[i]
      var found = jQuery.inArray(newFilter, allTags);
      if (found >= 0) {
      } else {
          // Element was not found, add it.
          allTags.push(newFilter);
      }
    }
    console.log('Grabbing template');
    var recipeTemplate = $('#recipe-template').html();
    console.log('Transforming template');
    var compileTpl = _.template(recipeTemplate);
    console.log('Creating HTML from template & model data');
    var html = compileTpl(data);
    // console.log(html);
    console.log('Rendering to page....');
    this.$el.append(html);
  }
});


// mongoDB support!
Backbone.Model.idAttribute = "_id";

// the document is ready
$(document).ready(function(){
  active.collection = new app.Collection(); // possibly comment out later, but leave for now
  // active.createRecipeView = new app.addRecipeView({
  //   collection: active.collection
  // }); this will be different for us once we get our layouts and such together
  $(".button-collapse").sideNav(); // for collapsible navbar
});
