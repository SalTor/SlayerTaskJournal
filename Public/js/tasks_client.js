function on_add(num) {
  task = {};
  task.taskNumber = num;
  task.taskAmount = $('#taskAmount').val();
  task.taskName = $('#taskName').val();
  task.taskNoteworthyDrop = $('#taskNoteworthydrop').val();

  request = $.ajax({url:'/tasks', type:'POST', data:task});

  request.done(function(msg) {
    window.location.href = "/tasks";
  });

  request.fail(function(jqXHR, textStatus) {
    console.err(textStatus);
  });
}

function on_delete(id){
  console.log("hi", id);
  request = $.ajax({url:'/tasks/:'+id, type:'DELETE'});
  request.done(function(msg){
    window.location.href = "/tasks";
  });
  request.fail(function(jqXHR, textStatus){
    console.log(textStatus);
  });
}