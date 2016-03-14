var express = require('express');
var app = express();
var index = require('./routes/index.js');
var bodyParser = require('body-parser');
var path = require('path');
var compute = require('../modules/compute');

app.set("port", process.env.PORT || 3000);


//add modules for each of the mathematical signs
// var addition = require('./modules/addition.js');
// var subtraction = require('./modules/subtraction.js');
// var multiplication = require('./modules/multiplication.js');
// var division = require('./modules/division.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/", index);

// app.use("/addition", addition);
// app.use("/division", division);
// app.use("/multiplication", multiplication);
// app.use("/subtraction", subtraction);


//maybe check this over later
var server = app.listen(3000, function () {
  console.log('Listening on port: 3000');
});
