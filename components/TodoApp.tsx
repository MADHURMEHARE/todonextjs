"use client";
import { useState, useEffect } from "react";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { Task } from '@/types/todo';

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskTime, setTaskTime] = useState<string>("");

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

  const addTask = (): void => {
    if (!newTask || !taskTime) return;
    
    const taskTimeDate = new Date(taskTime);
    const now = new Date();
    
    if (taskTimeDate <= now) {
      alert("Please select a future time for the reminder.");
      return;
    }
    
    const newTaskObj: Task = { 
      id: Date.now(), 
      text: newTask, 
      time: taskTime,
      reminderTriggered: false
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask("");
    setTaskTime("");
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id: number, newText: string): void => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      )
    );
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-2xl mx-auto p-6 border-2 border-gray-800 rounded-lg bg-white bg-opacity-90 shadow-xl backdrop-blur-sm">
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
