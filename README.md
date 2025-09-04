# Enhanced Todo App with Reminder System

A feature-rich todo application with advanced reminder functionality built with Next.js.

## Features

### 🎯 Core Todo Features
- Add, edit, and delete tasks
- Set custom reminder times for each task
- Visual task management with status indicators

### ⏰ Advanced Reminder System
- **Browser Notifications**: Native browser notifications with action buttons
- **Smart Reminder Logic**: Automatic detection of due reminders
- **Snooze Functionality**: Snooze reminders for 5 minutes or custom duration
- **Visual Priority Indicators**: Color-coded task borders based on urgency
- **Time Remaining Display**: Shows countdown until reminder is due
- **Overdue Task Management**: Special handling for overdue tasks

### 🎨 Enhanced UI/UX
- **Reminder Manager Component**: Dedicated section for upcoming and overdue reminders
- **Status Colors**: 
  - 🟢 Green: Future reminders
  - 🟡 Yellow: Due within 15 minutes
  - 🟠 Orange: Due within 5 minutes
  - 🔴 Red: Overdue
- **Responsive Design**: Works on desktop and mobile devices

### 💾 Data Persistence
- **Local Storage**: Tasks persist between browser sessions
- **Automatic Saving**: Changes are saved immediately
- **Data Recovery**: Tasks are restored on page reload

## Technical Implementation

### Reminder System Architecture
1. **Permission Management**: Requests notification permissions on app load
2. **Time Tracking**: Continuous monitoring of task times (every 10 seconds)
3. **Notification Handling**: Browser notifications with fallback to alerts
4. **Action Processing**: Handle snooze and complete actions from notifications

### Key Components
- `ReminderManager.js`: Dedicated component for reminder management
- `reminderUtils.js`: Utility functions for reminder operations
- Enhanced main page with integrated reminder functionality

### Browser Compatibility
- **Notifications**: Modern browsers with notification support
- **Fallback**: Alert dialogs for browsers without notification support
- **Local Storage**: Persistent data storage across sessions

## Usage

### Adding a Task with Reminder
1. Enter task description in the text field
2. Select date and time for the reminder
3. Click "Add" to create the task
4. The system will automatically schedule the reminder

### Managing Reminders
- **Snooze**: Click the ⏰ button to snooze a reminder for 5 minutes
- **Complete**: Click "Complete" in notification or delete the task
- **Edit**: Modify task text or time as needed
- **Delete**: Remove tasks from the list

### Notification Actions
When a reminder triggers:
- **Snooze 5 min**: Delays the reminder by 5 minutes
- **Mark Complete**: Removes the task from the list
- **Click notification**: Focuses the app window

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

## File Structure

```
todoapp/
├── app/
│   ├── page.js                 # Main application with enhanced reminder logic
│   └── todo/[id]/page.js      # Individual task detail page
├── components/
│   ├── ReminderManager.js     # Dedicated reminder management component
│   ├── TodoApp.js            # Original todo app component
│   ├── TodoHeader.js         # Header component
│   ├── TodoInput.js          # Input component
│   ├── TodoItem.js           # Individual task item
│   └── TodoList.js           # Task list component
├── utils/
│   └── reminderUtils.js      # Utility functions for reminder operations
└── public/
    ├── reminder.png          # Reminder notification icon
    └── background.jpg        # App background image
```

## Future Enhancements

- [ ] Recurring reminders
- [ ] Multiple reminder times per task
- [ ] Sound notifications
- [ ] Calendar integration
- [ ] Email reminders
- [ ] Mobile push notifications
- [ ] Task categories and tags
- [ ] Export/import functionality
