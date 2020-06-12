const express = require('express')
const app =new express()
const port = 8888
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
//var login=require('./routes/login');
var register=require('./routes/register');

app.use('/', express.static(__dirname));
app.use('/', express.static(__dirname + '/login'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

console.log(__dirname)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.get('/' , (req,res) => {
  res.sendFile(__dirname + '/login/login.html')
  console.log("Someone's here!");
})
//app.use('/login', login);
app.use('/register', register);





app.post('/Home/test.html', (req, res) => {
  res.sendFile(__dirname + '/Home/test.html')
  console.log(req.body.appellation);
  console.log(req.body.account);
  console.log(req.body.password);
})
