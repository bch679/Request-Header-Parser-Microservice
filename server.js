var express = require('express'),
    app = express(),
    useragent = require('express-useragent');

app.use(useragent.express());
app.get('/', function (req, res) {
  var buffer = req.useragent;
  res.json({'Browser': buffer.browser, 'ip address': req.headers['x-forwarded-for'], 'Language': req.headers["accept-language"], 'OS': buffer.os});
  });
app.listen(8080, function(){
  console.log('listening on port 8080...');
});
