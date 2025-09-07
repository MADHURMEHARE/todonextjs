import { TodoInputProps } from '@/types/todo';

export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask, isVisible, onClose }: TodoInputProps & { isVisible: boolean; onClose: () => void }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        {/* Modal Header */}
        <div className="bg-orange-500 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h2 className="text-white text-lg font-bold">Add New Task</h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-orange-600 rounded-lg p-1"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Task Name
              </label>
              <input
                type="text"
                placeholder="Enter task name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Reminder Time
              </label>
              <input
                type="datetime-local"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Modal Actions */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                addTask();
                onClose();
              }}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
