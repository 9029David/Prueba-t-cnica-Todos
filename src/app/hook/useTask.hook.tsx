"use client"

import { useState } from "react"
import { useTaskContext } from "../context/useTask.context"



// Envolvemos la lógica relacionada a los eventos de nuestro formulario en este hook
export default function useTask() {
    const [taskText, setTaskText] = useState('')
    const { addTask } = useTaskContext()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setTaskText(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Haremos uso de llamar a nuestro createTask() => context
    if(taskText.trim()) {
      addTask(taskText.trim())
      setTaskText('');
    }
  }

  return { taskText, handleChange, handleSubmit }
}