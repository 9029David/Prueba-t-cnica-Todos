"use client"

import { Check, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useTaskContext } from '../context/useTask.context';

export interface Task {
    id: string
    title: string
    completed: boolean
    createdAt: Date
}

export type TaskFilter = 'all' | 'completed';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
    const [isHovering, setIsHovering] = useState(false);
    const { toggleTask, deleteTask } = useTaskContext()


    return (
        <li 
            className="relative transition-all duration-300 ease-in-out"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div 
                className={`
                    p-4 
                    sm:p-6 
                    flex 
                    items-start 
                    gap-3 
                    ${task.completed ? 'bg-slate-50' : 'bg-white'}`
                }
            >
                <button
                    // Agregamos onClick para actualizar el estado de la tarea
                    onClick={() => toggleTask(task.id)}
                    title={`${!task.completed ? "incompleted" : "completed"}`}
                    className={`
                        w-5 h-5 
                        mt-0.5 
                        rounded-full 
                        flex items-center justify-center flex-shrink-0 
                        border 
                        transition-all duration-200 
                        ${task.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-slate-300 hover:border-blue-500'
                    }`}
                >
                    { task.completed && <Check size={14} className="text-white"/> }
                </button>
                
                <div className="flex-grow">
                    <p className={`text-base ${
                        task.completed ? 'text-slate-600 line-through' : 'text-slate-800'
                    } transition-all duration-200`}>
                        {task.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        {task.createdAt.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        })}
                    </p>
                </div>
                
                <button
                    // Agregamos onClick para poder eliminar la tarea
                    onClick={() => deleteTask(task.id)}
                    title='delete'
                    className={
                        `text-slate-400
                        hover:text-red-500
                        transition-all duration-200 ease-in-out 
                        p-1 rounded-full 
                        hover:bg-red-50 ${isHovering ? "opacity-100" : "opacity-0"}`
                    }
                >
                    <Trash2 size={16} />
                </button>
            </div>
        </li>
    );
};
