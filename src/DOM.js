const createHeaderSection = body => {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerText = 'To-Do List';
  header.appendChild(title);
  body.appendChild(header);
};

const createNavSection = body => {
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
};

const createMainSection = body => {
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
};

const initializePage = () => {
  const body = document.querySelector('body');

  createHeaderSection(body);
  createNavSection(body);
  createMainSection(body);
};

export { initializePage };
