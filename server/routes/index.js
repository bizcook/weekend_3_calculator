var express = require('express');
var router = express.Router();
var path = require('path');
var compute = require('../modules/compute');


//do i want to route or post? revisit this later
router.route('/data').post(function(req,res){
  var result = compute(req.body);
  res.send({message: result});
});


router.get("/*", function(req,res){
  console.log("Here is a LOG");
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname,'../public', file));
});

module.exports = router;











// //wondering if we put these here and then to a switch case
// //to route it out to these modules
// var addition = require('./addition');
// var subtraction = require('/.subtraction');
// var multiplication = require('./multiplication');
// var division = require('./division');



// req from ajax call in client app.js
// router.post("/addition", function(req, res){
//   res.send("i can add");
// });
//
// router.post("/subtraction", function(req, res){
//   res.send("i can subtract!");
// });
//
// router.post("/division", function(req, res){
//   res.send("i can divide!");
// });
//
// router.post("/multiplication", function(req, res){
//   res.send("i can multiply!");
// });
//
