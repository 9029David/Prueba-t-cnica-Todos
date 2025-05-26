import TaskSection from "./components/TaskSection.component";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 p-2 sm:p-8">
      <div className="mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            Task Manager
          </h1>
          <p className="text-slate-600">
            Keep track of your daily tasks with ease
          </p>
        </header>
        <TaskSection />
      </div>
    </div>
  );
}
