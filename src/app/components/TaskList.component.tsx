"use client"

import { useState } from "react";
import { useTaskContext } from "../context/useTask.context";
import Message from "./Message.component";
import TaskItem from "./TaskItem.component";
import Spinner from "./Spinner.component";


export default function TaskList() {
    const { tasks, loading, filteredTasks } = useTaskContext()
    const [selected, setSelected] = useState<string | null>(null)
    
    if(loading) return <Spinner/>

    return tasks.length === 0 ? (
        <Message/>
    ) : (
        <>
            <div className="flex gap-4 overflow-x-auto justify-center">
                <button  
                    className={`text-xs ${selected === null ? "btnPrimary" : "btnSecondary"}`}
                    onClick={() => setSelected(null)}
                >
                    All
                </button>

                {["active", "completed"].map((state, index) => (
                    <button 
                        className={`text-xs ${selected === state ? "btnPrimary" : "btnSecondary"}`}
                        key={index} 
                        onClick={() => setSelected(state)}
                    >
                        {state}
                    </button>
                ))}
            </div>
            <ul className="divide-y divide-slate-100">
                {selected !== null  
                ? filteredTasks(selected).map((task) => <TaskItem key={task.id} task={task} />) 
                : tasks.map((task) => <TaskItem key={task.id} task={task} />)}
            </ul>
            {
                selected && filteredTasks(selected).length === 0 && <Message/>
            }
        </>
    )
}