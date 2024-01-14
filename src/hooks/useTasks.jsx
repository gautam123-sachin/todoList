import tasksData from '../data/tasks.json';

/**
 * Get all tasks from the tasksData array.
 * @returns {Array} - An array containing all tasks.
 */
export const getAllTasks = () => {
  return tasksData;
};

/**
 * Get a task by its ID from the tasksData array.
 * @param {string} taskId - The ID of the task.
 * @returns {Object|null} - The found task object, or null if not found.
 */
export const getTaskById = (taskId) => {
  const foundTask = tasksData.find((task) => task._id === taskId);
  return foundTask;
};

/**
 * Delete a task from the tasksData array by its ID.
 * @param {string} taskId - The ID of the task to delete.
 * @returns {Array} - The updated tasksData array after deletion.
 */
export const deleteTask = (taskId) => {
  const updatedTasks = tasksData.filter((task) => task.index !== taskId);
  
  updatedTasks.forEach((task, index) => {
    task.index = index;
  });

  return updatedTasks;
};

/**
 * Update a task in the tasksData array.
 * @param {Object} editedTask - The edited task object.
 * @returns {Object|null} - The updated task object, or null if the task is not found.
 */
export const updateTask = (editedTask) => {
  const index = tasksData.findIndex((task) => task.index === editedTask.index);

  if (index !== -1) {
    const updatedTasks = [...tasksData];
    updatedTasks[index] = editedTask;
    // Assuming you want to update the original tasksData array
    tasksData.splice(0, tasksData.length, ...updatedTasks);
    return editedTask;
  }

  return null; // Return null or handle the case when the task is not found
};