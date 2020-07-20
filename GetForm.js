var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/GetForm.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "GetForm.htm" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      Name:req.query.Name,
      Id:req.query.Id
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(4004, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})