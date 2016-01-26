var express = require('express'),
    app = express(),
    routes = require('./app/routes/index.js');

routes(app);

app.listen(8080, function(){
  console.log('listening on port 8080...');
});
