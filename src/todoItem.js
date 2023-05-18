const todoItem = (title, dueDate, effortLevel, isCompleted = false) => {
  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const getIsCompleted = () => isCompleted;
  const getEffortLevel = () => effortLevel;

  return {
    getTitle,
    getDueDate,
    getIsCompleted,
    getEffortLevel,
  }
}

export default todoItem;