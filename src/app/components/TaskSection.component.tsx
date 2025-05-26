import TaskForm from './TaskForm.component';
import TaskList from './TaskList.component';


const TaskSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all max-w-md mx-auto fadeIn">
      {/* Formulario para crear tareas */}
      <TaskForm />
      {/* Lista de tareas */}
      <TaskList />
    </div>
  );
};

export default TaskSection;