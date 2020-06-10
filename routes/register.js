var express = require('express');
var CRUD = require('../models/CRUD')
var register = express.Router();
console.log("Check")
register.post('/',(req, res)=>{ //使用者向db進行註冊
    console.log("====== This is register.js =======")
    if(req.body.appellation == "" || req.body.account=="" || req.body.password==""){//檢查req中的email和password是否為空
            res.json({status:"Fail", message:'no email or password'})
        }else{
            data={
                appellation : req.body.appellation,
                account :  req.body.account,
                password : req.body.password
            }
            //data是json格式裡面有req傳來的email和password
            CRUD.register(data, (err, result)=>{

                if(!err){
                    //res.cookie('userID', req.body.email, { path: '/', signed: true, maxAge:600000});  //set cookie
                    //res.json({status:"OK"})
                    console.log("OK!")
                }
            })
    }
})
module.exports = register;
