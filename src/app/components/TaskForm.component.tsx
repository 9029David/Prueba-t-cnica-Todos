"use client"

import { Plus } from "lucide-react";
import useTask from "../hook/useTask.hook";

export default function TaskForm() {
    const { 
      handleChange, 
      handleSubmit, 
      taskText 
    } = useTask()

    return (
      <div className="p-6 border-b border-slate-100">
        <form
          className="flex flex-col sm:flex gap-2"
          onSubmit={handleSubmit}
        >
          <input 
            type="text" 
            className="inputPrimary"
            placeholder="Add new task..."
            onChange={handleChange}
            name="task"
            value={taskText}
          />

          <button 
            type="submit" 
            title="add"
            className={`btnPrimary`}
            disabled={!taskText.trim()}
          >
            <Plus/> 
            <span 
              className="hidden sm:inline"
            >Add</span>
          </button>
        </form>
      </div>
    )
}