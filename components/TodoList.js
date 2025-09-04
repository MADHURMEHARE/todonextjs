import TodoItem from "./TodoItem";

export default function TodoList({ tasks, editTask, deleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", color: "gray" }}>No tasks yet</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
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
