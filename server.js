var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('nodedb',['users']);
var bodyParser = require('body-parser');



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get('/user/:username',function(req,res){
	var username = req.params.username;
		console.log(username);
	db.users.findOne({username:username},function(err,docs){
		//console.log(docs);
		//console.log(err);
			res.json(docs);
		});  
});

app.get('/user/:id1/user1/:id2', function(req,res){
	console.log("received get req");
	var id = req.params.id1;
			console.log(id);
	var id2 = req.params.id2;
			console.log(id2);
	db.users.findOne({_id:mongojs.ObjectId(id)},function(err,doc){
		console.log(err);
		res.json(doc);
	});
});
app.post('/user',function(req,res){

	console.log(req.body);
	db.users.insert(req.body,function(err,doc){
	console.log(err);
		res.json(doc);
	
	});
});



app.put('/user/:id',function(req,res){
	var id = req.params.id;
		console.log(req.body.name);
		db.users.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{fname:req.body.fname,lname:req.body.lname,email:req.body.email,password:req.body.newpassword}},
		new: true},function (err,doc){
			res.json(doc);
		});
	
}); 



app.listen(5000);
console.log("server running on port 5000");