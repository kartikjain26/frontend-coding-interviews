import Task from '@/components/task'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

const bc = new BroadcastChannel('sync-channel')
const STORE_KEY = "my-data"

function App() {
  // const [show, setShow] = useState(false);
  // const [activeTask, setActiveTask] = useState({})
  // const dialogRef = useRef(null)
  const [isManager, setIsManager] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)
    setTasks(prev => [...prev, {
      name: formData.get('title') || '',
      status: 'todo',
      assignee: 'Rohan',
      id: crypto.randomUUID()
    }]);

    setTimeout(() => {
      bc.postMessage('sync')
    }, 300)
  }

  const updateTask = (task) => {
    setTasks(prev => {
      const newTAsks = prev.map(item => {
        if(item.id === task.id){
          return task;
        }
        return item;
      })

      return newTAsks
    })

    setTimeout(() => {
      bc.postMessage('sync')
    }, 300)
  }

  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    bc.addEventListener('message', (e) => {
      const message = e.data;

      if(message === 'sync') {
        const data = localStorage.getItem(STORE_KEY);
        console.log(data)
        if(!data === null) return;
        const parsedData = JSON.parse(data);
        setTasks(parsedData)
      }
    })
  }, [])

  return (
    <div className='max-w-[500px] mx-auto p-6'>
    <label> <input  type="checkbox" checked={isManager} onChange={() => setIsManager(prev => !prev)} />
    Is Manager?</label>
    <div >
      <ul className='flex flex-col gap-2'>
        {tasks.map(item => <li><Task updateTask={updateTask} key={item.id} {...item} /></li>)}
      </ul>

      {/* <dialog open={show}>
        <Task mode="edit" {...activeTask} />
      </dialog> */}

      {isManager && <form onSubmit={addTask}>
        <label>
          Enter your name:
        <input name="title" /></label>
        <button type="submit">Add task</button></form>}
    </div>
    </div>
  )}
