const express = require('express')
const airthmetic = require('./src/app/custom-module/airthmetic-opp');
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded({
  extended: true,
  
}));

app.use(bodyParser.json());
//default router
app.get('/', function (req : any, res : any) {
  res.send('Hello World');
});

app.post('/add',function(req : any,res:any){
  let value1 = req.body.value1 ? req.body.value1 : 0;
  let value2 = req.body.value2 ? req.body.value2:0
  let result={
    "addition" : airthmetic.addition(value1,value2)
  }
  res.send(result)
});

app.post('/substract',function(req : any,res:any){
  let value1 = req.body.value1 ? req.body.value1 : 0;
  let value2 = req.body.value2 ? req.body.value2:0
  let result={
    "substract" : airthmetic.substract(value1,value2)
  }
  res.send(result)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})