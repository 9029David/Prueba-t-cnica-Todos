export default function Message() {
    return (
       <div className="flex flex-col items-center justify-center py-12 px-6 text-center text-slate-500">
        <div className="mb-4 w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
            <path d="M8 6H16M8 12H16M8 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="text-lg font-medium mb-1">No tasks yet</h3>
        <p className="text-sm">Add a task to get started</p>
      </div>
    )
}