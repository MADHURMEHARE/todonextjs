import Link from "next/link";
import { TodoItemProps } from '@/types/todo';

export default function TodoItem({ task, editTask, deleteTask, toggleComplete }: TodoItemProps & { toggleComplete: (id: number) => void }) {
  const taskDate = new Date(task.time);
  const now = new Date();
  const timeDiff = taskDate.getTime() - now.getTime();
  const isOverdue = timeDiff < 0;
  const isDueSoon = timeDiff > 0 && timeDiff <= 300000; // 5 minutes
  const isCompleted = task.completed || false;

  return (
    <div className="task-item">
      {/* Task Content */}
      <div className="task-content">
        <Link
          href={`/todo/${task.id}?text=${encodeURIComponent(task.text)}&time=${task.time}`}
        >
          <h3 className={`task-title ${isCompleted ? 'completed' : ''}`}>
            {task.text}
          </h3>
          {!isCompleted && (
            <p className="task-time">
              {taskDate.toLocaleDateString()} • {taskDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          )}
        </Link>
      </div>
      
      {/* Action Buttons */}
      <div className="task-actions">
        {/* Complete Button */}
        <button
          onClick={() => toggleComplete(task.id)}
          className={`checkbox ${isCompleted ? 'completed' : ''}`}
          title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        >
          {isCompleted && (
            <svg className="checkbox-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        
        {/* Edit Button */}
        <button
          onClick={() => {
            const newText = prompt("Edit task:", task.text);
            if (newText) editTask(task.id, newText);
          }}
          className="action-button"
          title="Edit task"
        >
          <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        
        {/* Delete Button */}
        <button
          onClick={() => deleteTask(task.id)}
          className="action-button delete"
          title="Delete task"
        >
          <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}
