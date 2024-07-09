import { doneTaskCounter, taskCounter } from "./action.js";
import { listGroup } from "./selectors.js";

const observer = () => {
  const job = () => {
    taskCounter();
    doneTaskCounter();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const observer = new MutationObserver(job);
  observer.observe(listGroup, observerOptions);
};

export default observer;
