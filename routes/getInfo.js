var express = require('express');
var getInfo = express.Router();
var mongoose = require('mongoose');
const config = require('../models/config')
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));  // 連線異常
db.once('open', db => console.log('getinfo.js 連接資料庫成功'));     // 連線成功

var UserStatus = require('../models/userStatus')

getInfo.post('/',(req, res)=>{
    data ={
        account :  req.body.account,
    }
    UserStatus.findOne({
        account:data.account
    } , (err,result) => {
        console.log('try to find');
        if(err) throw err
        if(result){
            console.log("==== 找到資料了 ====")
            console.log("登入的帳號是 :"+ result.account)
            console.log("登入者的等級是 :"+ result.level)
            res.json({status:"OK", message:'資料庫找人成功',user:result})
        }
        else{
            console.log("=== 帳號或密碼輸入錯誤 ===");
            res.json({status:"fail", message:'帳號或密碼輸入錯誤'})
        }
    })
    
})
/*login.post('/logout',(req, res)=>{
    res.clearCookie('userID',{path:'/'});
    res.json({status:"OK"})
})*/
module.exports = getInfo;
