let pushTaskBtn = document.getElementById("text__field-btn");
let resetTextField = document.getElementById("text__field");
let taskList = document.getElementById("wish__list-items");

pushTaskBtn.onclick = function () {
  if (document.querySelector(".wish__list input").value.length == 0) {
  } else {
    taskList.insertAdjacentHTML(
      `beforeend`,
      `<div id='wish__list-item'>${
        document.getElementById("text__field").value
      }</div>`
    );
  }

  resetTextField.value = "";

  let taskDone = document.querySelectorAll("#wish__list-item");
  for (let i = 0; i < taskDone.length; i++) {
    taskDone[i].onclick = function () {
      this.classList.toggle("task__done");
    };
  }
};
