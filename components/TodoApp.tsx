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
    <div className="min-h-screen bg-gradient-pink-purple relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-5 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Todo Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto">
              <TodoList 
                tasks={tasks} 
                editTask={editTask} 
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
              />
            </div>
          </div>
          
          {/* Right Side - Title and Add Button */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Todo List
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 font-medium animate-slide-in">
              Simple Design Using React, TypeScript & Tailwind
            </p>
            
            <button 
              onClick={handleAddTask}
              className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto lg:mx-0"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Task
            </button>
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
