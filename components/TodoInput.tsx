import { TodoInputProps } from '@/types/todo';

export default function TodoInput({ newTask, setNewTask, taskTime, setTaskTime, addTask, isVisible, onClose }: TodoInputProps & { isVisible: boolean; onClose: () => void }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">Add New Task</h2>
          <button 
            onClick={onClose}
            className="modal-close"
          >
            <svg className="action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="modal-content">
          <div className="form-group">
            <label className="form-label">
              Task Name
            </label>
            <input
              type="text"
              placeholder="Enter task name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="form-input"
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">
              Reminder Time
            </label>
            <input
              type="datetime-local"
              value={taskTime}
              onChange={(e) => setTaskTime(e.target.value)}
              className="form-input"
            />
          </div>
          
          {/* Modal Actions */}
          <div className="modal-actions">
            <button
              onClick={onClose}
              className="modal-button cancel"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                addTask();
                onClose();
              }}
              className="modal-button submit"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
