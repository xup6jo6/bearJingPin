var express = require('express');
var CRUD = require('../models/CRUD')
var login = express.Router();

login.get('/',(req, res)=>{
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
})
login.post('/post',(req, res)=>{
    if(req.body.email=="" || req.body.password=="")//檢查req中的email和password是否為空
    {
        res.json({status:"fail", message:'no email or password'})
    }else{
        data={
            email : req.body.email,
            password : req.body.password
        }
        //data是json格式裡面有req傳來的email和password
        CRUD.checkPassword(data, (err, result)=>{
            if(!err){
                res.cookie('userID', req.body.email, { path: '/', signed: true, maxAge:600000});  //set cookie
                res.status(200)
                res.json({status:"OK"})
            }else{
                res.json({status:"fail", message:result})
            }
        })
    }
})
login.post('/logout',(req, res)=>{
    res.clearCookie('userID',{path:'/'});
    res.json({status:"OK"})
})
module.exports = login;
