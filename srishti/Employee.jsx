import { useEffect, useState } from "react";
import Task from "./Task";
import { EMPLOYEES, useTasks } from "./TaskContext";

const EMP_ID = "srishti";

const Employee = () => {
  const { tasks, filterByEmpId, filteredTasks } = useTasks();

  console.log(filteredTasks);

  useEffect(() => {
    filterByEmpId(EMP_ID, tasks);
  }, [tasks]);

  return (
    <div>
      <h1>Employee:</h1>

      {filteredTasks.map((task) => {
        return <Task key={task.id} task={task} />;
      })}
    </div>
  );
};

export default Employee;
