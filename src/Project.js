const Project = (name, tasks = []) => {
  const getName = () => name;

  const getTask = index => tasks[index];

  const getTaskByName = taskName => {
    return tasks[tasks.indexOf(taskName)];
  };

  const getTasks = () => tasks;

  const addTask = taskName => {
    tasks.push(taskName);
  };

  const deleteTask = index => {
    tasks.splice(index, 1);
  };

  return {
    getName,
    getTask,
    getTaskByName,
    getTasks,
    addTask,
    deleteTask,
  }
}

export default Project;