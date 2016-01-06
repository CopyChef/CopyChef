$("#restaurant-search-form").on("submit", function(event) {
  event.preventDefault();
  var restaurant = $(":input[name=restaurant]", this).val();
  app.getRecipeByRestaurant(restaurant);
});

// @param

app.getRecipeByRestaurant = function getRecipeByRestaurant(restaurant) {

  console.log("app.getRecipeByRestaurant() has been called. The user searched for " + restaurant);

  var ajaxArgument = {
    type: 'get',
    url: 'http://localhost:3000/recipes/' + restaurant,
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.log(data);

        var recipeTemplate = $('#recipe-template').html();
        console.log('Transforming template');
        var compileTpl = _.template(recipeTemplate);
        console.log('Creating HTML from template & model data');
        var html = compileTpl(data);
        // console.log(html);
        console.log('Rendering to page....');
        $('#recipe-listing').html("");

        $('#recipe-listing').append(html);

    },
    error: function(error) {
        console.log("error")
        console.log(error);
    }
};
// make the ajax call
$.ajax(ajaxArgument);


}
