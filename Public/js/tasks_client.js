function on_add(num) {
  task = {};
  task.amount = $('#taskamt').val();
  task._id = $('#taskid').val();
  task.taskNumber = num;
  task.noteworthyDrop = $('#tasknwdrop').val();

  request = $.ajax({url:'/tasks', type:'POST', data:task});

  request.done(function(msg) {
    window.location.href = "/tasks";
  });

  request.fail(function(jqXHR, textStatus) {
    console.err(textStatus);
  });
}