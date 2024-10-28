
 import React, { useState } from 'react';
 import { FaPlus, FaSave, FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
 import './HomeCompo.css';

 const HomeCompo = () => {
 //============================ usesate partb start
  const [tasks, setTasks]                           = useState([]);
  const [task, setTask]                             = useState('');
  const [editIndex, setEditIndex]                   = useState(null);
 //========================= functions part start
  const handleAdd = () => {
    if (!task) return;
    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask(''); 
  };
 //==================== Edit part start 
  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };
 //===================== delete part start
  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
 //=========================== todo desigen part start
  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          aria-label="New task"
        />
        <button onClick={handleAdd} className="add-button" aria-label={editIndex !== null ? 'Save task' : 'Add task'}>
          {editIndex !== null ? <FaSave /> : <FaPlus />}
        </button>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className="task-item">
            <span>{t}</span>
            <div className="task-buttons">
              <button onClick={() => handleEdit(index)} className="edit-button" aria-label="Edit task">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(index)} className="delete-button" aria-label="Delete task">
                <FaTrash />
              </button>
              {editIndex === index && (
                <button onClick={() => setEditIndex(null)} className="close-button" aria-label="Close edit">
                  <FaTimes />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
 };

 export default HomeCompo;
