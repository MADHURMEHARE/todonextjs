import TodoItem from "./TodoItem";
import { TodoListProps } from '@/types/todo';

export default function TodoList({ tasks, editTask, deleteTask, toggleComplete }: TodoListProps & { toggleComplete: (id: number) => void }) {
  return (
    <div>
      {/* Card Title */}
      <h2 className="section-title">To Do List</h2>
      
      {/* Task Items */}
      <div className="todo-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks yet. Add one to get started!</p>
          </div>
        ) : (
          tasks.map((task, index) => (
            <div 
              key={task.id} 
              className="fade-in"
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
