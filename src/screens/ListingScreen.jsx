import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card.jsx';
import { getAllTasks, deleteTask, updateTask } from '../hooks/useTasks';

import { Grid } from '@mui/material';

import '../styles/main.css';

/**
 * ListingScreen component displays a list of tasks.
 */
const ListingScreen = () => {

  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch all tasks when the component mounts
    setTasks(getAllTasks());
  }, []);

  /**
   * Handle task deletion.
   * @param {string} taskId - The ID of the task to be deleted.
   */
  const handleDelete = (taskId) => {
    // Delete the task from the tasks array
    setTasks(deleteTask(taskId));
  };

  /**
   * Handle task editing.
   * @param {object} task - The task object to be edited.
   */
  const handleEdit = (task) => {
    // Navigate to the edit screen for the selected task
    navigate(`/edit/${task._id}`);
  }

  return (
    <Grid
      container
      spacing={2}
      className="custom-grid"
    >
      {tasks.map((task) => (
        <Card
          key={task.index}
          task={task}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </Grid>
  );
};

export default ListingScreen;