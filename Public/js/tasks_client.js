function on_add() {
  task = {};
  task.number = $('#tasknum').val();
  task._id = $('#taskid').val();
  task.taskNumber = $('#taskamt').val();
  task.noteworthyDrop = $('#tasknwdrop').val();

  request = $.ajax({url:'/tasks', type:'POST', data:task});

  request.done(function(msg) {
    window.location.href = "/tasks";
  });
  request.fail(function(jqXHR, textStatus) {
    console.err(textStatus);
  });
}