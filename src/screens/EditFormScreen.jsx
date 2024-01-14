import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditForm from '../components/EditForm/EditForm';
import { getTaskById, updateTask } from '../hooks/useTasks';

/**
 * EditFormScreen component for editing a task.
 */
const EditFormScreen = () => {
  // Extracting the task ID from the URL parameters
  const { id } = useParams();
  // Hook to navigate between screens
  const navigate = useNavigate();
  // State to store the task data
  const [task, setTask] = useState(getTaskById(id));

  // Fetch the task data when the component mounts or the task ID changes
  useEffect(() => {
    // Function to fetch task data asynchronously
    const fetchTask = async () => {
      // Call the function to get task data by ID
      const taskData = await getTaskById(id);
      // Update the state with the fetched task data
      setTask(taskData);
    };

    // Invoke the fetchTask function
    fetchTask();
  }, [id]);

  // Handle form submission
  const handleSubmit = (editedTask) => {
    // Call the function to update the task with the edited data
    updateTask(editedTask);
    // Navigate back to the main screen
    navigate('/');
  };

  // Handle form cancellation
  const handleCancel = () => {
    // Navigate back to the main screen
    navigate('/');
  };

  // Render the EditForm component with task data, submit, and cancel handlers
  return (
    <EditForm task={task} onSubmit={handleSubmit} onCancel={handleCancel} />
  );
};

export default EditFormScreen;
