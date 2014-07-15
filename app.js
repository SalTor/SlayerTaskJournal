require("jade");
var express = require("express");
var tasks = require("./routes/tasks");
var path = require("path");

var app = express();

app.configure(function(){
	app.use(express.logger("dev"));
	app.use(express.bodyParser());
	app.use(require('stylus').middleware(__dirname + '/public'));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.set('view engine', 'jade');
app.set('views', './views');

/*
	====================================
	CRUD functionality except for delete
	====================================
*/

app.post("/tasks", function(req, res){
	var task = req.body;
	tasks.add_task(task, function(res2){
		res.send(res2);
	});
}); //Add a task

app.get("/tasks", function(req, res){
	tasks.get_all(function(err, tasks){
		res.render('allTasks', {title:'Tasks', tasks: tasks});
	});
}); //Show tasks

app.get("/tasks/:id", function(req, res){
	tasks.get_by_id(function(err, tasks){
		res.render('singleTask', {title:'Task'});
	});
}); //Read a task

app.put("/tasks/:id", function(req, res){
	tasks.update_task(function(err, tasks){
		res.render('allTasks', {title:'Tasks', tasks: tasks})
	});
});//Update task

app.listen(3000);
console.log("Server listening on localhost:3000");