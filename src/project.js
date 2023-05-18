const project = name => {
  let items = [];

  const getName = () => name;
  const getItems = () => items;
  const addItem = item => {
    items.push(item);
  }

  return {
    getName,
    getItems,
    addItem,
  }
}

export default project;