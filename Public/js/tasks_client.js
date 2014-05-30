function on_add(num) {
  task = {};
  task.taskNumber = num;
  task.taskAmount = $('#taskAmount').val();
  task.taskName = $('#taskName').val();
  task.taskNoteworthyDrop = $('#taskNoteworthyDrop').val();

  if(task.taskAmount == ""||task.taskName==""||task.taskNoteworthyDrop==""){
  }else{
    request = $.ajax({url:'/tasks', type:'POST', data:task});

    request.done(function(msg) {
      window.location.href = "/tasks";
    });

    request.fail(function(jqXHR, textStatus) {
      console.err(textStatus);
    });
  }
}

function on_delete(id){
  console.log("tasks_client", id);
  request = $.ajax({url:'/tasks', type:'DELETE', data:id});
  request.done(function(msg){
    window.location.href = "/tasks";
  });
  request.fail(function(jqXHR, textStatus){
    console.log(textStatus);
  });
}