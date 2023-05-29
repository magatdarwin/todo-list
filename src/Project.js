const Project = (name, tasks = []) => {
  const getName = () => name;
  const getTasks = () => tasks;
  const addTask = task => {
    tasks.push(task);
  }

  return {
    getName,
    getTasks,
    addTask,
  }
}

export default Project;