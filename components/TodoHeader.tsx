export default function TodoHeader({ onAddTask }: { onAddTask: () => void }) {
  return (
    <div className="bg-black px-6 py-6 relative overflow-hidden">
      {/* Curved Design Element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
      
      <div className="relative z-10 flex items-center justify-between">
        {/* Hamburger Menu */}
        <button className="text-white p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Title */}
        <h1 className="text-white text-2xl font-bold tracking-wide">TASKS</h1>
        
        {/* New Button */}
        <button 
          onClick={onAddTask}
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          NEW
        </button>
      </div>
    </div>
  );
}
