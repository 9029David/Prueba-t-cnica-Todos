"use client"

import { 
  createContext, 
  useContext, 
  useEffect, 
  useState 
} from "react"

import { Task } from "../components/TaskItem.component"
import axios from "axios"

interface TaskContextProps {
    loading: boolean,
    tasks: Task[],
    addTask: (title: string) => void,
    toggleTask: (id: string) => void,
    deleteTask: (id: string) => void,
    filteredTasks: (completed: string) => Task[]
}   


const TaskContext = createContext<TaskContextProps>({
    loading: true,
    tasks: [],
    addTask: () => {},
    toggleTask: () => {},
    deleteTask: () => {},
    filteredTasks: () => []
})

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true);

    

    const fetchTaks = async() => {
      try {
        const res = await axios.get<Task[]>("https://jsonplaceholder.typicode.com/todos")
  
        const tasks = res.data.slice(0, 5).map((task: Task) => ({
          id: crypto.randomUUID(),
          title: task.title,
          completed: task.completed,
          createdAt: new Date()
        }));
  
        setTasks([...tasks])
      } catch (error) {
        console.error("Error al realizar la request: ", error)
      }
    }
    
    // Cargamos tareas al iniciar
    useEffect(() => {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        // Convertimos a Date, para evitar que sea string
        const parsedTasks: Task[] = JSON.parse(savedTasks).map((task: Task) => ({
          ...task,
          createdAt: new Date(task.createdAt),
        }));
        setTasks(parsedTasks);

      // En caso de ser la primera vez o limpiar el localStorage
      // Mostramos listado de ejemplo
      } else {
        fetchTaks()
      }
      setLoading(false);
    }, []);

    // Cada vez que se actualice el estado "Tasks" se actualiza el localStorage
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);


    const addTask = (title: string) => {
        const newTask: Task = {
          id: crypto.randomUUID(),
          title,
          completed: false,
          createdAt: new Date(),
        };
        setTasks([newTask, ...tasks]);
      };
    
    const toggleTask = (id: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    };
  
    const deleteTask = (id: string) => {
      setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = (completed: string) => {

      if(completed === "completed") {
        return tasks.filter((task) => task.completed === true)
      } else  {
        return tasks.filter((task) => task.completed !== true)
      } 
    }


    const value = {
      loading,
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      filteredTasks
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTaskContext = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error("useTaskContext must be used  within an TaskProvider")
    return context
}