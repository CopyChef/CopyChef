$("#all-search-form").on("submit", function(event) {
  event.preventDefault();
  var keyword = $(":input[name=keyword]", this).val();
  app.getRecipeByAnySearch(keyword);
});

function refreshData(keyword) {
  app.getRecipeByAnySearch(keyword);
}

$("#restaurant-search-form").change(function(event) {
  event.preventDefault();
  var restaurant = $(":input[name=restaurant]", this).val();
  app.getRecipeByRestaurant(restaurant);
});

// START get recipe by restaurant search
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


// START get recipe by ALL search
app.getRecipeByAnySearch = function getRecipeByAnySearch(keyword) {

  console.log("app.getRecipeByAnySearch() has been called. The user searched for " + keyword);

  var ajaxArgument = {
    type: 'get',
    url: 'http://localhost:3000/recipes/search_all/' + keyword,
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
