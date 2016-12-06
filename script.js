var restart = document.getElementById('button_correct');
restart.click();


function runIt() {
  var task_x = +document.getElementById('task_x').innerHTML;
  var task_op = document.getElementById('task_op').innerHTML;
  var task_y = +document.getElementById('task_y').innerHTML;
  var task_res = document.getElementById('task_res').innerHTML;
  
  if (task_op == '+') {
    if (task_x+task_y == task_res) {
      doTrue();
    }else {
      doFalse();
    }
  }
  if (task_op == '–') {
    if (task_x-task_y == task_res) {
      doTrue();
    }else {
      doFalse();
    }
  }
  if (task_op == '/') {
    if (task_x/task_y == task_res) {
      doTrue();
    }else {
      doFalse();
    }
  }
  if (task_op == '×') {
    if (task_x*task_y == task_res) {
      doTrue();
    }else {
      doFalse();
    }
  }
};

runIt();

function doTrue() {
  setTimeout(function () {
    document.getElementById('button_correct').click();
    runIt();
  }, 1000);
};
function doFalse() {
  setTimeout(function () {
    document.getElementById('button_wrong').click();
    runIt();
  }, 1000);
};
