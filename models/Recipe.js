var mongoose = require ('mongoose');

var RecipeSchema = new mongoose.Schema ({
  Restaurant: String,
  NameOfDish: String,
  Tags: String,
  Ingredients: String,
  Directions: String,
  Preptime: String,
  CookTime: String,
  RecipeImage: String,
  SourceName: String,
  SourceLink: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);
