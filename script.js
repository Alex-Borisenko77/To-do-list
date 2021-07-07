let pushTaskBtn = document.getElementById("text__field-btn");

pushTaskBtn.onclick = function () {
  let taskList = document.getElementById("wish__list-items");
  taskList.insertAdjacentHTML(
    `beforeend`,
    `<div id='wish__list-item'>${
      document.getElementById("text__field").value
    }</div>`
  );
};
