const express = require('express')
const app =new express()
const port = 9999

app.use('/', express.static(__dirname));

console.log(__dirname)

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})



var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/Home/test.html', (req, res) => {
  res.sendFile(__dirname + '/Home/test.html')
  console.log(req.body.appellation);
  console.log(req.body.account);
  console.log(req.body.password);
})
