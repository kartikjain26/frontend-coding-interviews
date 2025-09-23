// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Manager from "./Manager";
import Employee from "./Employee";
import TaskProvider from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <Manager />
        <Employee />
      </div>
    </TaskProvider>
  );
}

export default App;
