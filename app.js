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

//Nearly all the CRUD functionality; all but delete since I can't delete tasks I've done
app.get("/tasks", function(req, res){
	tasks.get_all(function(err, tasks){
		res.render('allTasks', {title:'Tasks', tasks: tasks});
	});
}); //For listing them all out

//app.get("/tasks/:id", , function(req, res){tasks.get_by_id(function(err, tasks){res.render('singleTask', {title:'Task'}); }); ); //For looking at the details of each task
//Going to focus on looking up a specific task later

app.post("/tasks", function(req, res){
	var task = req.body;
	tasks.add_task(task, function(res2){
		res.send(res2);
	});
}); //For adding a new task
app.put("/tasks/:id", tasks.update_task); //For updating task if a task is prematurely entered into journal

app.listen(3000);
console.log("Server listening on localhost:3000");