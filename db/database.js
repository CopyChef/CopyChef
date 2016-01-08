var mongoose = require('mongoose');
var connectionString = process.env.DATABASE_URL || process.env.MONGOLAB_URI;

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
