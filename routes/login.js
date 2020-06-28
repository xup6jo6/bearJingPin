var express = require('express');
var login = express.Router();
var mongoose = require('mongoose');
const config = require('../models/config')
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));  // 連線異常
db.once('open', db => console.log('Connected to MongoDB'));     // 連線成功

var User = require('../models/users')

/*login.get('/',(req, res)=>{
var name='guest';
  isLogin=false;
  if(req.signedCookies.userID){
      name=req.signedCookies.userID
      isLogin = true;
      console.log("is login")
  }else{
      console.log("not login")
  }

   res.render('login', { title: 'Express', member:name, logstatus:isLogin });
})*/
login.post('/',(req, res)=>{
    if(req.body.account=="" || req.body.password=="")//檢查req中的email和password是否為空
    {
        res.json({status:"fail", message:'no email or password'})
    }else{
        data ={
            account :  req.body.account,
            password : req.body.password
        }
        //data是json格式裡面有req傳來的email和password
        console.log("Before Check PWD");
        User.findOne({
            account:data.account,
            password:data.password
        } , (err,result) => {
            if(err) throw err
            if(result){
                console.log("==== Login Success ====")
                console.log("DATA IS :"+ result.account)
            }
            else{
                console.log("=== 帳號或密碼輸入錯誤 ===");
                return res.redirect('/');
            }
        
        })
        
        res.redirect('../Home/test.html')
    }
})
/*login.post('/logout',(req, res)=>{
    res.clearCookie('userID',{path:'/'});
    res.json({status:"OK"})
})*/
module.exports = login;
