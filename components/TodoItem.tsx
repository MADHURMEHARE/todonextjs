import Link from "next/link";
import { TodoItemProps } from '@/types/todo';

// Circular Progress Component
function CircularProgress({ percentage, size = 40 }: { percentage: number; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="3"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#f97316"
          strokeWidth="3"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-orange-500">{percentage}%</span>
      </div>
    </div>
  );
}

export default function TodoItem({ task, editTask, deleteTask, toggleComplete }: TodoItemProps & { toggleComplete: (id: number) => void }) {
  const taskDate = new Date(task.time);
  const now = new Date();
  const timeDiff = taskDate.getTime() - now.getTime();
  const isOverdue = timeDiff < 0;
  const isDueSoon = timeDiff > 0 && timeDiff <= 300000; // 5 minutes
  const isCompleted = task.completed || false;
  
  // Calculate progress based on time remaining
  const totalTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const timeElapsed = Math.max(0, totalTime - timeDiff);
  const progress = Math.min(100, Math.max(0, (timeElapsed / totalTime) * 100));

  return (
    <li className="bg-white rounded-lg shadow-sm border border-gray-200 mb-3">
      <div className="p-4">
        <div className="flex items-center gap-4">
          {/* Progress/Status Indicator */}
          <div className="flex-shrink-0">
            {isCompleted ? (
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ) : (
              <CircularProgress percentage={Math.round(progress)} size={40} />
            )}
          </div>
          
          {/* Task Content */}
          <div className="flex-1 min-w-0">
            <Link
              href={`/todo/${task.id}?text=${encodeURIComponent(task.text)}&time=${task.time}`}
              className="block"
            >
              <h3 className={`text-lg font-medium ${isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                {task.text}
              </h3>
              {!isCompleted && (
                <p className="text-sm text-gray-500 mt-1">
                  {taskDate.toLocaleDateString()} at {taskDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </Link>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {!isCompleted && (
              <button
                onClick={() => toggleComplete(task.id)}
                className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                title="Mark as complete"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            )}
            
            <button
              onClick={() => {
                const newText = prompt("Edit task:", task.text);
                if (newText) editTask(task.id, newText);
              }}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              title="Edit task"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              title="Delete task"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
