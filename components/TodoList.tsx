import TodoItem from "./TodoItem";
import { TodoListProps } from '@/types/todo';

export default function TodoList({ tasks, editTask, deleteTask }: TodoListProps) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg py-8">
        No tasks yet
      </p>
    );
  }

  return (
    <ul className="list-none p-0">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
