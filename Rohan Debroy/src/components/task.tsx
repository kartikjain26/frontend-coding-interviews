import { useState } from "react"

export default function Task({  updateTask, ...task }) {
    const {name, assignee, status,} = task;

    const [edit, setEdit] = useState(false);
    const [value, setValue] = useState(name)
    
    const handleChange = (e) => {
        const value = e.target.value;
        // trigger the change    
        setValue(value)  
        updateTask({
            ...task,
            name: value,
        })  
    }

    const updateStatus = (e) => {
        const value = e.target.value;
        updateTask({
            ...task,
            status: value,
        })  
    }


    return <button onClick={() => setEdit(true)} className="border w-full flex flex-col">
        {edit ? <input value={value} onChange={handleChange} />
        : <h2>{name}</h2>}
        <p>{assignee}</p>
        <select value={status} onChange={updateStatus}>
            <option>todo</option>
            <option>in-progress</option>
        </select>
    </button>
}