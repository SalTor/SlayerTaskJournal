var express = require("express");
var tasks = require("./routes/tasks");

var app = express();

app.configure(function(){
	app.use(express.logger("dev"));
	app.use(express.bodyParser());
});

//Nearly all the CRUD functionality; all but delete since I can't delete tasks I've done
app.get("/tasks", tasks.get_all); //For listing them all out
app.get("/tasks/:id", tasks.get_by_id); //For looking at the details of each task
app.post("/task", tasks.add_task); //For adding a new task
app.put("/tasks/:id", tasks.update_task); //For updating task if a task is prematurely entered into journal

app.listen(3000);
console.log("Server listening on localhost:3000");