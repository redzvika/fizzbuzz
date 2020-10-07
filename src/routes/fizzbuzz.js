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

  // validation result
  let validationResult = v.validate(req.body, schema);
  let response = {};

  // check if validation failed.
  if(validationResult.errors.length>0){
    response.errors= validationResult.errors;
    response.response="";
    res.status(400).send(response)
  }else{
    let count=req.body.count
    let output=""

    for (let i=1;i<=count;i++){
      output=output+ getSingleFizzBuzz(i);
      if (i<count){
        output=output+","
      }
    }
    response.errors=[];
    response.response=output;
    res.send(response);
  }
});


router.all('/', function(req, res, next){
  let response = {};
  response.errors= "Method not supported"
  response.response="";
  res.status(405).send(response);
});
/**
 * calculate value of FizzBuzz for specific position
 * @param num
 * @returns {string}
 */
function getSingleFizzBuzz(num) {
  let output=""

  if (num % 15 === 0)
    output+="FizzBuzz";
  else if (num % 3 === 0)
    output+="Fizz";
  else if (num % 5 === 0)
    output+="Buzz";
  else
    output+=num;
  return output;
}

module.exports = router;
