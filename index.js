var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080,
    bodyParser = require('body-parser'),
    controller = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// kalau pengen ujicoba tanpa link comment ini dibawah
app.use(express.static('public'));
app.use(express.static('assets'));
app.use(express.static('json'));

// 

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('API jalan di port : ' + port);