import Task from "./Task";
import { EMPLOYEES, useTasks } from "./TaskContext";

const Manager = () => {
  const { tasks, addTask } = useTasks();

  return (
    <div>
      <h1>Manager:</h1>

      <form onSubmit={addTask}>
        <input name="taskName" type="text" />
        <select name="assigneeId">
          {EMPLOYEES.map((emp) => {
            return <option key={emp.id}>{emp.name}</option>;
          })}
        </select>
        <input type="submit" />
      </form>

      {tasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Manager;
