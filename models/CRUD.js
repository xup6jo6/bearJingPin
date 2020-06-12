var MongoClient = require('mongodb').MongoClient;
const config = require('./config')
const url = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`
var DB_CONN_STR = 'mongodb://127.0.0.1:27017/';
let client = MongoClient.connect(DB_CONN_STR,{ useNewUrlParser: true,useUnifiedTopology: true });
console.log('running');
exports.register = (userData, callback)=>{

	MongoClient.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true }, (err, client)=>{
        if(err) throw err;
        
        const mydb = client.db('uidd2020_groupB');//latest version ! reference:https://blog.csdn.net/bifjhh_sk/article/details/79383296
        mydb.collection('User_Info',function(err,collection){
        	collection.insertOne({appellation:userData.appellation , account:userData.account , password:userData.password});
        })
        console.log('appellation:'+userData.appellation)
        console.log('Email:'+userData.account);
        console.log('Password:'+userData.password);
    })
}
exports.checkPassword = (userData, callback)=>{
	MongoClient.connect(DB_CONN_STR,{ useNewUrlParser: true , useUnifiedTopology: true }, (err, client)=>{
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
    })

}