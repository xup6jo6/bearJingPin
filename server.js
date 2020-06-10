const express = require('express')
const app =new express()
const port = 8888
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
//var login=require('./routes/login');
var register=require('./routes/register');

app.use('/', express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(__dirname)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


//app.use('/login', login);
app.use('/Home/test.html', register);





app.post('/Home/test.html', (req, res) => {
  res.sendFile(__dirname + '/Home/test.html')
  console.log(req.body.appellation);
  console.log(req.body.account);
  console.log(req.body.password);
})
