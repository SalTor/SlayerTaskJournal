function on_add() {
  task = {};
  task._id = $('#taskid').val();
  task.fname = $('#fname').val();
  task.lname = $('#lname').val();

  request = $.ajax({url:'/tasks', type:'POST', data:task});

  request.done(function(msg) {
    window.location.href = "/tasks";
  });
  request.fail(function(jqXHR, textStatus) {
    console.err(textStatus);
  });
}