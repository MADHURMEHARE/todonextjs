"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);       // All tasks
  const [newTask, setNewTask] = useState("");   //  task text
  const [taskTime, setTaskTime] = useState(""); // Input task time

  // reminder
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setTasks((prevTasks) =>
        prevTasks.filter((task) => {
          if (new Date(task.time) <= now) {
            alert(`Reminder: ${task.text}`); // Noti_fi
            return false; //  after_alert
          }
          return true;
        })
      );
    }, 30 * 1000);

    return () => clearInterval(interval);
  }, []);

  
  const addTask = () => {
    if (!newTask || !taskTime) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, time: taskTime },
    ]);
    setNewTask("");
    setTaskTime("");
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (

    <div style={{ backgroundImage: "url('/background.jpg')", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", }}>

      <div
        style={{
          maxWidth: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "8px",
          backgroundColor: "rgba(0,0,0,0.1)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",

        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3rem",
            marginBottom: "2rem",
            textShadow: "2px 2px 4px rgba(181, 18, 18, 0.7)", // only one textShadow
          }}>
          MY-TO-DO APP
        </h1>

        {/* Input sectionnn */}

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

        {/* Task Listingg */}
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>No tasks yet</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task) => (
              <li
                key={task.id}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "10px",
                  marginBottom: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  background: "white",
                }}
              >
                {/*  Task linked */}
                <Link
                  href={`/todo/${task.id}?text=${encodeURIComponent(task.text)}&time=${task.time}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>
                    <b>{task.text}</b> — {new Date(task.time).toLocaleString()}
                  </span>
                </Link>

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
            ))}
          </ul>
        )}
      </div>
    </div>
  );

}
