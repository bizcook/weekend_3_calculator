var express = require('express');
var app = express();
var index = require('./routes/index.js');
var bodyParser = require('body-parser');
var path = require('path');


//add modules for each of the mathematical signs
// var addition = require('./modules/addition.js');
// var subtraction = require('./modules/subtraction.js');
// var multiplication = require('./modules/multiplication.js');
// var division = require('./modules/division.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use("/", index);

// app.use("/addition", addition);
// app.use("/division", division);
// app.use("/multiplication", multiplication);
// app.use("/subtraction", subtraction);

var server = app.listen(3000, function () {
  console.log('Listening on port: 3000');
});
