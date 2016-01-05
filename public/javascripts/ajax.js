$("#restaurant-search-form").on("submit", function(event) {
  event.preventDefault();
  var restaurant = $(":input[name=restaurant]", this).val();
  app.getRecipeByRestaurant(restaurant);
});

// @param

app.getRecipeByRestaurant = function getRecipeByRestaurant(restaurant) {

  console.log("app.getRecipeByRestaurant() has been called. The user searched for" + restaurant);

  var ajaxArgument = {
    type: 'get',
    url: 'http://localhost:3000/recipes/' + restaurant,
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.log(data);


    },
    error: function(error) {
        console.log("error")
        console.log(error);
    }
};
// make the ajax call
$.ajax(ajaxArgument);


}
