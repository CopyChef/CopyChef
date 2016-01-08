var app = app || {};
var active = active || {};

app.addRecipeView = Backbone.View.extend({
  el: $('#add-recipe'),
  initialize: function() {
    console.log('AddRecipeView instantiated');
    this.$el.children('button').hide();
  },
  events: {
    'click button': 'addRecipe',
    'blur input': 'validateInput'
  },
  addRecipe: function () {
    var confirmation = confirm('Are you sure you want to save this?');
    if(confirmation) {
      var allTags = $('#p-Tags').val();
      var tagsFormatted = allTags.split(',');

      var allIngredients = $('#p-Ingredients').val(),
      var ingredientsFormatted = allIngredients.split(',');

      var data = {
        Restaurant: $('#p-Restaurant').val(),
        NameOfDish: $('#p-NameOfDish').val(),
        Tags: tagsFormatted,
        Ingredients: ingredientsFormatted,
        Directions: $('#p-Directions').val(),
        PrepTime: $('#p-PrepTime').val(),
        CookTime: $('#p-CookTime').val(),
        RecipeImage: $('#p-RecipeImage').val(),
        SourceName: $('#p-SourceName').val(),
        SourceLink: $('#p-SourceLink').val()
      }
      console.log(data);
      this.collection.create(data);
    }
  },
  validateInput: function() {
    var allTheInputs = this.$el.children('input');
    console.log(allTheInputs);
    var validValues = 0;

    for (var i = 0; i < allTheInputs.length; i++) {
      var selector = $(allTheInputs)[i];
      //
      var val = $(selector).val();
      if (val.length > 0) {
        validValues++;
      }
    }

    if (validValues != allTheInputs.length) {
      this.$el.children('button').hide();
      this.$el.children('.error').html('Some fields are missing values');
    }else {
      this.$el.children('button').show();
      this.$el.children('.error').html('');
    }

  }
});

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
