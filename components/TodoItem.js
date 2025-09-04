import Link from "next/link";

export default function TodoItem({ task, editTask, deleteTask }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        marginBottom: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: "white",
      }}
    >
      {/* Task content */}
      <div style={{ flex: 1 }}>
        <Link
          href={`/todo/${task.id}?text=${encodeURIComponent(task.text)}&time=${task.time}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>
            <b>{task.text}</b>
          </div>
          <div style={{ fontSize: "0.9em", color: "#666" }}>
            {new Date(task.time).toLocaleString()}
          </div>
        </Link>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => {
            const newText = prompt("Edit task:", task.text);
            if (newText) editTask(task.id, newText);
          }}
          style={{ border: "1px solid black", padding: "4px 8px" }}
        >
          Edit
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          style={{
            border: "1px solid black",
            padding: "4px 8px",
            background: "#f88",
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
