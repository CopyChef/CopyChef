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


// TESTING IN BETWEEN HERE

// app.addRecipeView = Backbone.View.extend({
//   el: $('#add-recipe'),
//   initialize: function() {
//     console.log('AddRecipeView instantiated');
//     this.$el.children('button').hide();
//   },
//   events: {
//     'click button': 'addRecipe',
//     'blur input': 'validateInput'
//   },
//   addRecipe: function () {
//     var confirmation = confirm('Are you sure you want to save this?');
//     if(confirmation) {
//       var data = {
//         Restaurant: $('#p-Restaurant').val(),
//         NameOfDish: $('#p-NameOfDish').val(),
//         Tags: $('#p-Tags').val(),
//         Ingredients: $('#p-Ingredients').val(),
//         Directions: $('#p-Directions').val(),
//         PrepTime: $('#p-PrepTime').val(),
//         CookTime: $('#p-CookTime').val(),
//         RecipeImage: $('#p-RecipeImage').val(),
//         SourceName: $('#p-SourceName').val(),
//         SourceLink: $('#p-SourceLink').val()
//       }
//       console.log(data);
//       this.collection.create(data);
//     }
//   },
//   validateInput: function() {
//     var allTheInputs = this.$el.children('input');
//     console.log(allTheInputs);
//     var validValues = 0;
//
//     for (var i = 0; i < allTheInputs.length; i++) {
//       var selector = $(allTheInputs)[i];
//       //
//       var val = $(selector).val();
//       if (val.length > 0) {
//         validValues++;
//       }
//     }
//
//     if (validValues != allTheInputs.length) {
//       this.$el.children('button').hide();
//       this.$el.children('.error').html('Some fields are missing values');
//     }else {
//       this.$el.children('button').show();
//       this.$el.children('.error').html('');
//     }
//
//   }
// });

// TESTING IN BETWEEN HERE

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



// mongoDB support!
Backbone.Model.idAttribute = "_id";

// the document is ready
$(document).ready(function(){
  active.collection = new app.Collection();
  active.createRecipeView = new app.addRecipeView({
      collection: active.collection
    });
   // possibly comment out later, but leave for now
  // active.createRecipeView = new app.addRecipeView({
  //   collection: active.collection
  // }); this will be different for us once we get our layouts and such together
  // $(".button-collapse").sideNav(); // for collapsible navbar
});



    // $("#search").autocomplete(
    //             {
    //      source:'autocomplete.php',
    //              minLength:1,
    //              autoFocus: true,
    //              delay: 100,
    //              select: function(event, ui) {
    //                 $("#search").val(ui.item.label);
    //                 $("#searchForm").submit();
    //              }
    // });
