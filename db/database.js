var mongoose = require('mongoose');
var connectionString = 'mongodb://heroku_ml3wdmlv:chidragons2016@ds039155.mongolab.com:39155/heroku_ml3wdmlv';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('CopyChef is thieving!');
});

mongoose.connection.on('error', function(err){
  console.log(err);
});

mongoose.connection.on('disconnected', function(){
  console.log('CopyChef is not in the kitchen');
});
