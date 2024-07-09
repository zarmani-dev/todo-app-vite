import { addList, deleteTask, doneTask, editTask } from "./action.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-edit-btn")) {
    editTask(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-del-btn")) {
    deleteTask(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("done-check")) {
    doneTask(event.target.closest(".list").id);
  }
};

export const addListHandler = () => {
  addList(taskInput.value);
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    addList(taskInput.value);
  }
};
