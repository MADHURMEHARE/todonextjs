import Link from "next/link";
import { TodoItemProps } from '@/types/todo';

export default function TodoItem({ task, editTask, deleteTask }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Task content */}
      <div className="flex-1">
        <Link
          href={`/todo/${task.id}?text=${encodeURIComponent(task.text)}&time=${task.time}`}
          className="text-black no-underline hover:text-blue-600"
        >
          <div className="font-semibold text-lg">{task.text}</div>
          <div className="text-sm text-gray-600">
            {new Date(task.time).toLocaleString()}
          </div>
        </Link>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => {
            const newText = prompt("Edit task:", task.text);
            if (newText) editTask(task.id, newText);
          }}
          className="border border-gray-300 px-3 py-1 rounded hover:bg-gray-50 transition-colors"
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
