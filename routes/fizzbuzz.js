var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  var Validator = require('jsonschema').Validator;
  var v = new Validator();
  var schema = {
      "title": "fizzbuzz",
      "required": [ "count",  ],
      "type": "object",
      "properties": {
        "count": {
          "type": "number",
          "minimum": 1,
          "maximum": Number.MAX_SAFE_INTEGER,
        }
      }
  };
  let validationResult = v.validate(req.body, schema);
  let response = {};

  if(validationResult.errors.length>0){
    response.errors= validationResult.errors;
    response.response="";
    res.status(404).send(response)
  }else{
    let count=req.body.count
    let output=""

    if (count % 15 === 0)
      output+="FizzBuzz";
    else if (count % 3 === 0)
      output+="Fizz";
    else if (count % 5 === 0)
      output+="Buzz";
    else
      output+=count;
    response.errors=[];
    response.response=output;
    res.send(response);
  }
});

module.exports = router;
