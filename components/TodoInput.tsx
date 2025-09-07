import { TodoInputProps } from '@/types/todo';

export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask }: TodoInputProps) {
  return (
    <div className="flex gap-2.5 mb-5">
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <input
        type="datetime-local"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onClick={addTask}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200"
      >
        Add
      </button>
    </div>
  );
}
