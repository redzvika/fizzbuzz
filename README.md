# fizzbuzz-demo 

 
**How to build :**

Under the root directory execute:<BR>
`docker build --tag node-docker .`
<br> This will create a docker container with name node-docker 

**How to run locally :<BR>**
Execute command: <BR>
`docker run --publish 8080:3000 node-docker`
<br>This will start the docker container and expose port 8080 , you can replace it with your desired port.  
 


**How to check locally:<BR>**

- Execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "count":1
 }'` <br>receive `{
                      "errors": [],
                      "response": "1"
                  }`
 
- Execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "count":3
 }'` <br>receive `{
                      "errors": [],
                      "response": "1,2,Fizz"
                  }`
 
 - Execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "count":5
  }'` <br>receive `{
                       "errors": [],
                       "response": "1,2,Fizz,4,Buzz"
                   }`
  
  
- Execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl --request POST 'localhost:8080/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "count":15
}'` <br>receive `{
                     "errors": [],
                     "response": "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz"
                 }`
  
    
- Execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl --request POST 'localhost:8080/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "count":17
}'` <br>receive `{
                     "errors": [],
                     "response": "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz,16,17"
                 }`
  
    
  


 
 


