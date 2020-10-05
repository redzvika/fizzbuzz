# fizzbuzz demo 


####How to build :

under the root directory call:<BR>
&nbsp;&nbsp;&nbsp;&nbsp;`docker build --tag node-docker .`

####How to run locally :<BR>
expose on port 8080 <br>
&nbsp;&nbsp;&nbsp;&nbsp;`docker run --publish 8080:3000 node-docker` 


####How to check locally:<BR>

- execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "count":1
 }'` <br>receive `{"errors":[],"response":"1"}`
 
- execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
 --header 'Content-Type: application/json' \
 --data-raw '{
     "count":3
 }'` <br>receive `{"errors":[],"response":"fizz"}`
 
 - execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl  --request POST 'localhost:8080/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "count":5
  }'` <br>receive `{"errors":[],"response":"buzz"}`
  
  
- execute  command :&nbsp;&nbsp;&nbsp;&nbsp;`curl --request POST 'localhost:8080/fizzbuzz' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "count":15
}'` <br>receive `{"errors":[],"response":"fizzbuzz"}`
  
    

  


 
 


