import TodoItem from "./TodoItem";
import { TodoListProps } from '@/types/todo';

export default function TodoList({ tasks, editTask, deleteTask, toggleComplete }: TodoListProps & { toggleComplete: (id: number) => void }) {
  return (
    <div className="w-full">
      {/* Card Title */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">To Do List</h2>
      
      {/* Divider Line */}
      <div className="w-full h-px bg-gray-200 mb-6"></div>
      
      {/* Task Items */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div 
              key={task.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TodoItem
                task={task}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
