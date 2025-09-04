export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ flex: 1, border: "1px solid black", padding: "5px" }}
      />
      <input
        type="datetime-local"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
        style={{ border: "1px solid black", padding: "5px" }}
      />
      <button
        onClick={addTask}
        style={{
          border: "1px solid black",
          borderRadius: "4px",
          backgroundColor: "red",
          color: "white",
          padding: "5px 10px",
        }}
      >
        Add
      </button>
    </div>
  );
}
