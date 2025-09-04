# Component-Based Todo App with Simple Reminder System

A clean, component-based todo application with basic reminder functionality built with Next.js.

## Features

### 🎯 Core Todo Features
- Add, edit, and delete tasks
- Set custom reminder times for each task
- Clean component-based architecture

### ⏰ Simple Reminder System
- **Basic Timing**: Checks every 30 seconds for due tasks
- **Simple Notification**: Shows browser notification or alert when time is up
- **One-time Reminder**: Each task gets reminded only once when its time comes

## Component Structure

### 📦 Components
- **`TodoHeader.js`** - App title display
- **`TodoInput.js`** - Task input form with time picker
- **`TodoItem.js`** - Individual task display with edit/delete
- **`TodoList.js`** - Container for all task items
- **`TodoApp.js`** - Main app with state management and reminder logic

### 📄 Pages
- **`app/page.js`** - Main page that renders TodoApp component
- **`app/todo/[id]/page.js`** - Individual task detail page

## File Structure
```
todoapp/
├── app/
│   ├── page.js                 # Main page (renders TodoApp)
│   └── todo/[id]/page.js       # Individual task detail page
├── components/
│   ├── TodoApp.js             # Main app logic & state management
│   ├── TodoHeader.js          # App title
│   ├── TodoInput.js           # Task input form
│   ├── TodoItem.js            # Individual task display
│   └── TodoList.js            # Task list container
└── public/
    ├── reminder.png           # Reminder notification icon
    └── background.jpg         # App background image
```

## How It Works

1. **Add Task**: Enter task text and select future time
2. **Monitor**: App checks every 30 seconds for due tasks
3. **Notify**: Shows simple notification when task time arrives
4. **Manage**: Edit or delete tasks as needed

## Setup and Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. Grant notification permissions when prompted

## Simple Reminder Logic

- Checks every 30 seconds for tasks due within 1 minute
- Shows browser notification if available, otherwise alert
- Marks tasks as "reminderTriggered" to avoid duplicate notifications
- No complex features - just basic timing and notification
