var express = require('express');
var mongoose = require('mongoose');
const config = require('../models/config')
var register = express.Router();
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));  // 連線異常
db.once('open', db => console.log('Connected to MongoDB'));     // 連線成功

var User = require('../models/users')

console.log("Check")
register.post('/post',(req, res)=>{ //使用者向db進行註冊
    console.log("====== This is register.js =======")
    if(req.body.appellation == "" || req.body.account=="" || req.body.password==""){//檢查req中的email和password是否為空
        errors.push("請在空格內填入資料");
        res.json({status:"fail" , message:"No password"})
    }else{
        var user = new User({
            appellation : req.body.appellation,
            account :  req.body.account,
            password : req.body.password
        });
        console.log("===================" + user.account + "=====================");
        //data是json格式裡面有req傳來的email和password
        User.countDocuments({account:user.account} , (err,count) => {
                if(err) throw err
            else{
                if(count>0){
                    console.log("This account has already existed! count : "+count)
                }
                else{
                    console.log("=== 新用戶註冊 ===");
                    user.save((err,user) =>{
                        if(err)
                            return console.error(err);
                    });
                }
                //res.send("Yeah");
                
            }
        })
        /*CRUD.register(data, (err, result)=>{
            if(!err){
                //res.cookie('userID', req.body.email, { path: '/', signed: true, maxAge:600000});  //set cookie
                //res.json({status:"OK"})
                console.log("===User Register OK!===")
            }
        })*/
        res.redirect('../Home/test.html')
        console.log("Redirect");
    }
})
module.exports = register;
