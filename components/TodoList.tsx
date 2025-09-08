import TodoItem from "./TodoItem";
import { TodoListProps } from '@/types/todo';

export default function TodoList({ tasks, editTask, deleteTask, toggleComplete }: TodoListProps & { toggleComplete: (id: number) => void }) {
  return (
    <div className="w-full">
      {/* Card Title */}
      <h2 className="text-xl font-bold text-black text-center mb-6">To Do List</h2>
      
      {/* Task Items */}
      <div className="space-y-3">
        {tasks.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-black text-base">No tasks yet. Add one to get started!</p>
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
