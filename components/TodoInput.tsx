import { TodoInputProps } from '@/types/todo';

export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask, isVisible, onClose }: TodoInputProps & { isVisible: boolean; onClose: () => void }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-purple-700 px-6 py-6 rounded-t-3xl flex items-center justify-between relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full transform translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-10 rounded-full transform -translate-x-8 translate-y-8"></div>
          
          <h2 className="text-white text-xl font-bold relative z-10">Add New Task</h2>
          <button 
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-10 rounded-full p-2 transition-colors relative z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Task Name
              </label>
              <input
                type="text"
                placeholder="Enter task name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                autoFocus
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Reminder Time
              </label>
              <input
                type="datetime-local"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
          
          {/* Modal Actions */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                addTask();
                onClose();
              }}
              className="flex-1 bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
