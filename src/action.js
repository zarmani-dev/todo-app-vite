import {
  listGroup,
  listTemplate,
  taskDoneCount,
  taskInput,
  taskTotal,
} from "./selectors.js";
import Swal from "sweetalert2";

export const addList = (task) => {
  listGroup.append(createTask(task || taskInput.value));
  taskInput.value = "";

  // taskCounter();
};

export const taskCounter = () => {
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};
export const doneTaskCounter = () => {
  const lists = document.querySelectorAll(".list input:checked");
  taskDoneCount.innerText = lists.length;
};

const createTask = (inputText) => {
  const list = listTemplate.content.cloneNode(true);
  console.dir(list);
  list.querySelector(".list").id = "list" + Date.now();
  list.querySelector(".list-task").textContent = inputText;

  return list;
};

export const deleteTask = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.remove();
    }
  });
  // doneTaskCounter();
  // taskCounter();
};

export const editTask = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listTask = currentList.querySelector(".list-task");
  const editTaskInput = document.createElement("input");
  editTaskInput.className =
    "border border-stone-950 px-2 py-1 w-[160px] font-mono focus:outline-none";
  listTask.after(editTaskInput);
  editTaskInput.value = listTask.innerText;
  editTaskInput.focus();
  listTask.classList.add("hidden");

  editTaskInput.addEventListener("blur", () => {
    listTask.innerText = editTaskInput.value;
    listTask.classList.remove("hidden");
    editTaskInput.classList.add("hidden");
  });
};

export const doneTask = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const doneCheck = currentList.querySelector(".done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  // doneTaskCounter();
  listTask.classList.toggle("line-through");
  currentList.classList.add("duration-200");
  currentList.classList.toggle("scale-90");
  currentList.classList.toggle("opacity-50");
  if (doneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};
