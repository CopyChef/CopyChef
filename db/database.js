var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/copychefapi';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('CopyChef is theifing!');
});

mongoose.connection.on('error', function(err){
  console.log(err);
});

mongoose.connection.on('disconnected', function(){
  console.log('CopyChef is not in the kitchen');
});
