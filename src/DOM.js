const initializePage = () => {
  const body = document.querySelector('body');

  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerText = 'To-Do List';
  header.appendChild(title);
  body.appendChild(header);

  const nav = document.createElement('nav');
  const links = document.createElement('ul');
  links.classList.add('todo-lists');
  const home = document.createElement('li');
  home.innerText = 'Home';
  links.appendChild(home);
  const projects = document.createElement('li');
  projects.innerText = 'Projects';
  links.appendChild(projects);
  const projectsList = document.createElement('ul');
  projectsList.classList.add('projects-list')
  links.appendChild(projectsList);

  nav.appendChild(links);
  body.appendChild(nav);

  const main = document.createElement('main');
  const listContainer = document.createElement('div')
  listContainer.classList.add('list-container');

  const listControls = document.createElement('div');
  listControls.classList.add('list-controls');
  const addTodoButton = document.createElement('button');
  addTodoButton.id = 'add-todo';
  addTodoButton.textContent = 'New Task';
  listControls.appendChild(addTodoButton);

  main.appendChild(listContainer)
  main.appendChild(listControls);
  body.appendChild(main);
}

export { initializePage };
