import TodoItem from "./TodoItem";
import { TodoListProps } from '@/types/todo';

export default function TodoList({ tasks, editTask, deleteTask, toggleComplete }: TodoListProps & { toggleComplete: (id: number) => void }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="text-center py-16">
          <div className="mx-auto w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No tasks yet</h3>
          <p className="text-gray-500">Tap the "New" button to add your first task</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div 
            key={task.id} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <TodoItem
              task={task}
              editTask={editTask}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
