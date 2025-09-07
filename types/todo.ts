export interface Task {
  id: number;
  text: string;
  time: string;
  reminderTriggered: boolean;
  completed?: boolean;
}

export interface TodoInputProps {
  newTask: string;
  setNewTask: (task: string) => void;
  taskTime: string;
  setTaskTime: (time: string) => void;
  addTask: () => void;
}

export interface TodoItemProps {
  task: Task;
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}

export interface TodoListProps {
  tasks: Task[];
  editTask: (id: number, newText: string) => void;
  deleteTask: (id: number) => void;
}
