"use client";
import { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [taskTime, setTaskTime] = useState("");

  // Simple reminder check
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      
      tasks.forEach((task) => {
        const taskTime = new Date(task.time);
        const timeDiff = taskTime.getTime() - now.getTime();
        
        // If reminder is due (within 1 minute) and hasn't been triggered
        if (timeDiff <= 60000 && timeDiff > 0 && !task.reminderTriggered) {
          // Simple notification
          if ("Notification" in window && Notification.permission === "granted") {
            new Notification("Task Reminder", {
              body: `Time for: ${task.text}`,
              icon: "/reminder.png"
            });
          } else {
            alert(`Reminder: ${task.text}`);
          }
          
          // Mark as triggered
          setTasks(prevTasks => 
            prevTasks.map(t => 
              t.id === task.id ? { ...t, reminderTriggered: true } : t
            )
          );
        }
      });
    };

    const interval = setInterval(checkReminders, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [tasks]);

  // Request notification permission
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  const addTask = () => {
    if (!newTask || !taskTime) return;
    
    const taskTimeDate = new Date(taskTime);
    const now = new Date();
    
    if (taskTimeDate <= now) {
      alert("Please select a future time for the reminder.");
      return;
    }
    
    const newTaskObj = { 
      id: Date.now(), 
      text: newTask, 
      time: taskTime,
      reminderTriggered: false
    };
    
    setTasks([...tasks, newTaskObj]);
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
        <TodoHeader />
        <TodoInput
          newTask={newTask}
          setNewTask={setNewTask}
          taskTime={taskTime}
          setTaskTime={setTaskTime}
          addTask={addTask}
        />
        <TodoList tasks={tasks} editTask={editTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
