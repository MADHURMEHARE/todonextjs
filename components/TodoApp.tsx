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
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

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
      reminderTriggered: false,
      completed: false
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

  const toggleComplete = (id: number): void => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleAddTask = () => {
    setShowAddModal(true);
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewTask("");
    setTaskTime("");
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <div className="content-wrapper">
          {/* Main Title Card */}
          <div className="title-card">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h1 className="main-title">
                Todo List
              </h1>
              <p className="subtitle">
                Simple Design Using React, TypeScript & CSS
              </p>
            </div>
          </div>
          
          {/* Add Task Button Card */}
          <div className="button-card">
            <button 
              onClick={handleAddTask}
              className="add-button"
            >
              <svg className="add-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <div className="add-button-text">
                <div>Add</div>
                <div>New Task</div>
              </div>
            </button>
          </div>
          
          {/* Todo List Card */}
          <div className="todo-card">
            <TodoList 
              tasks={tasks} 
              editTask={editTask} 
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
            />
          </div>
        </div>
      </div>
      
      {/* Add Task Modal */}
      <TodoInput
        newTask={newTask}
        setNewTask={setNewTask}
        taskTime={taskTime}
        setTaskTime={setTaskTime}
        addTask={addTask}
        isVisible={showAddModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
