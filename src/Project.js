const Project = (name, tasks = {}) => {
  const getName = () => name;

  const getTask = taskName => tasks[taskName];

  const getTasks = () => {
    let list = [];
    for (let key in tasks) {
      list.push(tasks[key]);
    }

    return list;
  }

  const addTask = task => {
    tasks[task.getTitle()] = task;
  }

  return {
    getName,
    getTask,
    getTasks,
    addTask,
  }
}

export default Project;