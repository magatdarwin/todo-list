const Task = (title, dueDate, effortLevel, completed = false) => {
  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const isCompleted = () => completed;
  const getEffortLevel = () => effortLevel;

  const setTitle = newTitle => {
    title = newTitle;
  }

  const setDueDate = newDueDate => {
    dueDate = newDueDate;
  }

  const toggleCompleted = () => {
    completed = !completed;
  }

  const setEffortLevel = newEffortLevel => {
    effortLevel = newEffortLevel;
  }

  return {
    getTitle,
    getDueDate, 
    isCompleted,
    getEffortLevel,
    setTitle,
    setDueDate,
    toggleCompleted,
    setEffortLevel,
  }
};

export default Task;