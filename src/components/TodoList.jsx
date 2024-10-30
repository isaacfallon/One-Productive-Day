import { useState } from "react";

export default function TodoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();

        if (newTask.trim() !== '') {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="text-center mt-4">
            <h2 className="text-2xl text-center">Todo list</h2>
            <div className="mb-4">
                <form onSubmit={addTask} className="">
                    <input
                        className="text-xl p-2 border rounded-md"
                        type="text"
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        onSubmit={addTask}
                    />
                    <button className="text-xl font-bold px-2 py-2 text-white bg-emerald-500 hover:bg-emerald-800 rounded-md"
                        onClick={addTask}>Add task</button>
                </form>

            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index} className="text-xl font-bold padding-4 bg-slate-100 mb-2 border border-slate-600 rounded flex items-center">
                        <span className="flex-1">{task}</span>
                        <button className="font-bold px-2 py-4 text-white bg-orange-600 hover:bg-orange-800 rounded-md" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
    )
}