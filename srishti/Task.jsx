import { useState } from "react";
import { useTasks } from "./TaskContext";

// validations
// router

const Task = ({ task }) => {
  const { editTask, removeTask } = useTasks();

  const [newTask, setNewTask] = useState("");
  const [isInputShown, setIsInputShown] = useState(false);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEditClick = () => {
    setIsInputShown(true);
  };

  const handleDeleteClick = (id) => {
    removeTask(id);
  };

  const handleBlurEvent = (id) => {
    editTask({ taskId: id, newName: newTask });
  };

  return (
    <div>
      <p>ID: {task.id}</p>
      <p>Name: {task.name}</p>
      <p>Employee ID: {task.empId}</p>
      <p>Status: {task.status}</p>
      <button onClick={handleEditClick}>Edit</button>
      {isInputShown && (
        <input
          type="text"
          onChange={handleInputChange}
          onBlur={() => handleBlurEvent(task.id)}
        />
      )}
      <button onClick={() => handleDeleteClick(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
