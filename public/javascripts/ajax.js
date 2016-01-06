// $("#restaurant-search-form").on("submit", function(event) {
//   event.preventDefault();
//   var restaurant = $(":input[name=restaurant]", this).val();
//   app.getRecipeByRestaurant(restaurant);
// });

$("#restaurant-search-form").change(function(event) {
  event.preventDefault();
  var restaurant = $(":input[name=restaurant]", this).val();
  app.getRecipeByRestaurant(restaurant);
});

// @param

app.getRecipeByRestaurant = function getRecipeByRestaurant(restaurant) {

  console.log("app.getRecipeByRestaurant() has been called. The user searched for " + restaurant);

  var ajaxArgument = {
    type: 'get',
    url: 'http://localhost:3000/recipes/search/' + restaurant,
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.log(data);

        var recipeTemplate = $('#recipe-template').html();
        console.log('Transforming template');
        var compileTpl = _.template(recipeTemplate);
        console.log('Creating HTML from template & model data');
        $('#recipe-listing').html("");
            for (var i = 0; i < data.length; i++) {
              var html = compileTpl(data[i]);
              console.log('Rendering to page....');
              $('#recipe-listing').append(html);
            }
        // console.log(html);


    },
    error: function(error) {
        console.log("error")
        console.log(error);
    }
};
// make the ajax call
$.ajax(ajaxArgument);


}
