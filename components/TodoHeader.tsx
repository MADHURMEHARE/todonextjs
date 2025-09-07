export default function TodoHeader({ onAddTask }: { onAddTask: () => void }) {
  return (
    <div className="bg-orange-500 px-4 py-4 flex items-center justify-between">
      {/* Hamburger Menu */}
      <button className="text-white p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {/* Title */}
      <h1 className="text-white text-xl font-bold">Task List</h1>
      
      {/* New Button */}
      <button 
        onClick={onAddTask}
        className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-orange-50 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        New
      </button>
    </div>
  );
}
