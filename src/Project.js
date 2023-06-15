const Project = (name, tasks = []) => {
  const getName = () => name;

  const getTask = index => tasks[index];

  const getTaskByName = taskName => {
    return tasks[tasks.indexOf(taskName)];
  }

  const getTasks = () => tasks;

  const addTask = taskName => {
    tasks.push(taskName);
  }

  return {
    getName,
    getTask,
    getTaskByName,
    getTasks,
    addTask,
  }
}

export default Project;