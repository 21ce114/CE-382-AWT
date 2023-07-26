const express = require("express");
const bodyParser = require("body-parser")


const hostname = '127.0.0.1';
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/form.html");
});
  
app.post("/display", function(req, res) {
  var fname = req.body.fname;
  var lname = req.body.lname;
  var ID = req.body.id;
  var Branch = req.body.branch;
  var College = req.body.college;
    
  var FullName = fname +" "+ lname ;
    
  res.send(`<b>Full Name is :${FullName}<br>
            <b>Your ID is: ${ID}<br>
            <b>Your Branch is: ${Branch}<br>
            <b>Your College is: ${College}<br>`);
});
  
app.listen(3000, function(){
  console.log(`server is running on http://${hostname}:${port}/`);
})