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
        res.json({status:"fail" , message:"註冊資料不可為空白"})
    }
    else{
        var user = new User({
            appellation : req.body.appellation,
            account :  req.body.account,
            password : req.body.password,
            level : 1,
            exp : 0,
            money : 0,
            love : 0
        });
        console.log("===================" + user.account + "=====================");
        //data是json格式裡面有req傳來的email和password
        User.countDocuments({account:user.account} , (err,count) => {
            if(err) 
                throw err
            else{
                if(count>0){//帳號重複
                    console.log("This account has already existed! count : "+count)
                    res.json({status:"fail" , message:"該帳號名稱已經被註冊過"});
                }
                else{//成功註冊
                    console.log("=== 新用戶註冊 ===");
                    user.save((err,user) =>{
                        if(err)
                            return console.error(err);
                    });
                    res.json({status:"OK" , message:"Register Success!",account:user.account});
                }
            }
        })
        console.log("Redirect");
    }
})
module.exports = register;
