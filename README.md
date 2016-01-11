![CopyChef logo](http://i.imgur.com/S5DTUJ7.png)
# CopyChef

An API for delicious copycat recipes. If you have ever wanted to just stay home, put on your chef hat and recreate your favorite meals from local restaurants then CopyChef will be your new go to for finding those recipes easily and quickly.

[Visit CopyChef](https://copychef.herokuapp.com/)
### Approach
Copy cat recipe sites are abundant and we wanted to give users of our API a quick and simple way access those recipes. Other sites require too many clicks and taps to access the information the user is looking for. We wanted the user to be able to search for recipes by restaurant, recipe, food type and tags associated with each recipe.

We divided up the work based on our strengths. We sketched out the wireframes together and got to work. Stephen and Lidia focused on the back-end, using Express, Backbone and MongoDB. Nick and Adam handled the front-end, creating styling and templates for views. We also each contributed to our sample data by populating the seed.json file with recipes we wanted to see on our API.

Front-end and back-end came together on day 3 and we started figuring out what needed to be done to make the integration complete.


### Technologies Used

* Express
* Backbone
* Mongo DB
* jQuery
* Handlebars
* Passport
* Materialize
* [Autocomplete | jQuery UI](https://jqueryui.com/autocomplete/)

**Why We Used Materialize CSS**
Adam built out wireframes into static HTML/CSS pages. He has done other sites with pure CSS from scratch without libraries/frameworks like Materialize or Bootstrap and wanted experience with a library of default stylings. The project timeframe required speedy development which a library could provide. Significant customizations were made to the defaults in our own styles.css file. Nick did very significant front end work as well including styling and worked out a style guide with Adam.

### User Stories

*Diane:* A suburban mom with 5 kids who keep her busy. She likes to stick to healthier foods for her family which is sometimes hard, considering how picky her kids are about what they eat. She knows her kids are more than willing to eat what is on the table when they dine out at their favorite restaurants. However, that can get pricey with a large family. She wants a quick and simple way to be able to search for the recipes from her kids' favorite restaurants, so she can make them in her own kitchen.  

*Bachelorette Betty:* A working professional who likes to unwind by cooking, she likes to eat at popular local restaurants, but can't always find someone to go with or would prefer a cheaper alternative. After a long day at work, she would like nothing better than to put on her apron and cook her own dinner. She makes it exciting by choosing a recipe from a nice restaurant.

Takeaways: Create a site where users can search by restaurant -- busy users need easy, quick options.


### Wireframes
Adam led on wireframes, user tested them with an avid online recipe user (his wife), refined them, shared them with the team and refined them a bit more.
* [Wireframes](https://docs.google.com/presentation/d/1fSzfWq3RKGjR2-G6Ppeh-H-BKQaDVOdxd2FzOkStUCk/edit?usp=sharing)

###Installation Instructions
npm install

### Unsolved Problems/Hurdles


* Add ability to update and remove recipes from the page (not just on Postman)
* Secure the API with an API key, especially for removing recipes
* Add more recipes from local restaurants
* Fix issue where account is not authenticated on individual recipe pages
* Adding ability to favorite recipes
* Various alterations to the add recipe page:
  * Allow users to upload an image from their computer (possibly storing as a base64 string)
  * Allow the user to input directions line by line, using jQuery to hide/display input lines
  * Implement a certain level of sanitizing the data
  * Add styling
