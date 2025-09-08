import { TodoInputProps } from '@/types/todo';

export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask, isVisible, onClose }: TodoInputProps & { isVisible: boolean; onClose: () => void }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md border border-gray-200">
        {/* Modal Header */}
        <div className="bg-gray-100 px-6 py-4 rounded-t-lg flex items-center justify-between border-b border-gray-200">
          <h2 className="text-black text-lg font-bold">Add New Task</h2>
          <button 
            onClick={onClose}
            className="text-gray-600 hover:text-black hover:bg-gray-200 rounded p-1 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Task Name
              </label>
              <input
                type="text"
                placeholder="Enter task name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Reminder Time
              </label>
              <input
                type="datetime-local"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Modal Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-300 text-black px-4 py-2 rounded font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                addTask();
                onClose();
              }}
              className="flex-1 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded font-medium transition-colors"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
