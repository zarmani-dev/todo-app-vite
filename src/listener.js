import {
  addListHandler,
  listGroupHandler,
  taskInputHandler,
} from "./handler.js";
import { listGroup, taskBtn, taskInput } from "./selectors.js";

const listener = () => {
  taskBtn.addEventListener("click", addListHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
};

export default listener;
