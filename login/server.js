/*var http = require('http');
var fs = require('fs');


fs.readFile('./login.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8888);
});*/

const express = require('express');
const app = new express();
const port = 8888;
app.use(express.static(__dirname ));

app.get('/', function(request, response){
    response.sendFile('/home/uidd2020/user/tnus0822/public_html/bear/bearJingPin/login/login.html');
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})