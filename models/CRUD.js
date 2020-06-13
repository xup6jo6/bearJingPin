var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const config = require('./config')
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`

mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error', err => console.error('connection error', err));  // 連線異常
db.once('open', db => console.log('Connected to MongoDB'));     // 連線成功



var userModelSchema = new mongoose.Schema({
    appellation:String,
    account:String,
    password:String
});
var userModel = mongoose.model('userModel' , userModelSchema)


exports.register = (userData, callback)=>{
    mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
    var user1 = new userModel({
        appellation : userData.appellation,
        account : userData.account,
        password : userData.password
    });
    userModel.countDocuments({ account : userData.account} , (err,count) => {
        if(err)
            return console.error(err);
        if(count > 0){
            console.log("This account has already existed! count : "+count)
        }
        else{
            console.log("=== 有新用戶進行註冊 ===");
            user1.save((err,user1) =>{
                if(err)
                    return console.error(err);
            });
        }
                       
    });
        
}

exports.checkPassword = (userData, callback)=>{
    mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
    userModel.findOne({
        account : userData.account,
        password : userData.password
    } , (err,data) => {
        if(err)
            throw err;
        if(data){
            console.log("==== Login Success ====")
        }
        else{
            console.log("=== 帳號或密碼輸入錯誤 ===");
            
        }            
    });
    /*userModel.countDocuments({
        account : userData.account,
        password : userData.password
    } , (err,count) => {
        if(err)
            return console.error(err);
        if(count > 0){
            console.log("==== Login Success ====")
        }
        else{
            console.log("=== 帳號或密碼輸入錯誤 ===");
            
        }            
    });*/
	/*MongoClient.connect(DB_CONN_STR,{ useNewUrlParser: true , useUnifiedTopology: true }, (err, client)=>{
		if(err) throw err;

		const dbo = client.db('Bear');
		var query = {email: userData.email , password: userData.password};
		console.log('login Email:'+userData.email);
        console.log('login Password:'+userData.password);
		dbo.collection('User_Info').find(query).toArray(function(err, result){
			if(err) throw err;
			console.log(result);
		});
        //... //search
    })*/
    console.log("End of CRUD")
}