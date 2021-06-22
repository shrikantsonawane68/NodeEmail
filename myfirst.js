var http = require('http');
var dt = require('./MyFirstModule');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});  
  res.write("My name is shrikant!!");   
  res.write("Current Date & Time is :"+dt.myDateTime());  
  res.write('Url : '+ req.url); 
  var q= url.parse(req.url, true).query;
  var txt = q.year+" "+q.month;
  res.write(txt);
  res.end();
}).listen(8080);



