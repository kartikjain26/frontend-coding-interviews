import { createContext, useContext, useState } from "react";

export const EMPLOYEES = [
  { id: 1, name: "srishti" },
  { id: 2, name: "juli" },
  { id: 3, name: "richa" },
];

export const FILTERS = ["open", "in-progress", "done"];
export const DEFAULT_STATUS = FILTERS[0];

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  /**
   * {
   *    id: ,
   *    name: ,
   *    empId: ,
   *    status: ,
   * }
   */

  const addTask = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskName = formData.get("taskName");
    const assigneeId = formData.get("assigneeId"); // check this

    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      empId: assigneeId,
      status: DEFAULT_STATUS,
    };

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.push(newTask);
      return newTasks;
    });
  };

  const editTask = ({ taskId, status, newName }) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];

      const taskIndex = newTasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        if (newName) {
          newTasks[taskIndex].name = newName;
        }
        if (status) {
          newTasks[taskIndex].status = status;
        }
      }

      return newTasks;
    });
  };

  const removeTask = (taskId) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];

      const taskIndex = newTasks.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        newTasks.splice(taskIndex, 1);
      }

      return newTasks;
    });
  };

  const filterByStatus = (status, targetTasks) => {
    const filteredTasks = targetTasks.filter((task) => {
      return task.status === status;
    });
    setFilteredTasks(filteredTasks);
  };

  const filterByEmpId = (empId, targetTasks) => {
    const filteredTasks = targetTasks.filter((task) => {
      console.log("task", empId, task);
      return task.empId === empId;
    });
    console.log("filtered", filteredTasks);
    setFilteredTasks(filteredTasks);
  };

  const providerValue = {
    tasks,
    addTask,
    editTask,
    removeTask,
    filterByStatus,
    filterByEmpId,
    filteredTasks,
  };

  return (
    <TaskContext.Provider value={providerValue}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => {
  const providerValue = useContext(TaskContext);

  return providerValue;
};

export default TaskProvider;
export { useTasks };
