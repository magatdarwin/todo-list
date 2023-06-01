import { 
  storeProjectList, 
  retrieveProjectListObject,
  addTask
} from './StorageHandler.js';

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
  addTodoButton.addEventListener('click', showTaskModal);
  listControls.appendChild(addTodoButton);
  
  main.appendChild(listContainer)
  main.appendChild(listControls);
  body.appendChild(main);
};

const newTaskDialog = body => {
  const taskModal = document.createElement('div');
  taskModal.id = 'task-modal';

  const taskForm = document.createElement('form');
  taskForm.id = 'task-form';

  const titleGroup = document.createElement('div');
  titleGroup.classList.add('input-group');
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Title'
  titleLabel.htmlFor = 'title';
  const title = document.createElement('input');
  title.type = 'text';
  title.id = 'title';
  title.placeholder = 'Title'
  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(title);

  const dueDateGroup = document.createElement('div');
  dueDateGroup.classList.add('input-group');
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date'
  dueDateLabel.htmlFor = 'due-date';
  const dueDate = document.createElement('input');
  dueDate.type = 'date';
  dueDate.id = 'due-date';
  dueDate.placeholder = 'Due Date';
  dueDateGroup.appendChild(dueDateLabel);
  dueDateGroup.appendChild(dueDate);

  const effortLevelGroup = document.createElement('div');
  effortLevelGroup.classList.add('input-group');
  const effortLevelLabel = document.createElement('label');
  effortLevelLabel.textContent = 'Effort'
  effortLevelLabel.htmlFor = 'effort-level';
  const effortLevel = document.createElement('select');
  effortLevel.id = 'effort-level';
  
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Please choose an effort level';
  defaultOption.selected = true;
  defaultOption.disabled = true;

  const easyLevel = document.createElement('option');
  easyLevel.value = '1';
  easyLevel.textContent = 'Easy';
  
  const mediumLevel = document.createElement('option');
  mediumLevel.value = '2';
  mediumLevel.textContent = 'Medium';

  const hardLevel = document.createElement('option');
  hardLevel.value = '3';
  hardLevel.textContent = 'Hard';

  effortLevel.appendChild(defaultOption);
  effortLevel.appendChild(easyLevel);
  effortLevel.appendChild(mediumLevel);
  effortLevel.appendChild(hardLevel);

  effortLevelGroup.appendChild(effortLevelLabel);
  effortLevelGroup.appendChild(effortLevel);

  const controlGroup = document.createElement('div');
  controlGroup.classList.add('control-group');
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Add Task';
  submitButton.id = 'submit-new-task';
  submitButton.addEventListener('click', event => {
    addTask(event);
    hideTaskFormModal();
    loadTasks('default');
  });
  controlGroup.appendChild(submitButton);
  const cancelButton = document.createElement('input');
  cancelButton.type = 'button';
  cancelButton.value = 'Cancel';
  cancelButton.id = 'cancel-new-task';
  cancelButton.addEventListener('click', hideTaskFormModal);
  controlGroup.appendChild(cancelButton);

  taskForm.appendChild(titleGroup);
  taskForm.appendChild(dueDateGroup);
  taskForm.appendChild(effortLevelGroup);
  taskForm.appendChild(controlGroup);

  taskModal.appendChild(taskForm);
  body.appendChild(taskModal);
};

const showTaskModal = () => {
  document.querySelector('#task-modal').style.display = 'block';
};

const hideTaskFormModal = event => {
  const taskModal = document.querySelector('#task-modal');
  taskModal.style.display = 'none';
  const taskForm = document.querySelector('#task-form');
  taskForm.reset();
};

const loadTasks = projectName => {
  const listContainer = document.querySelector('.list-container');
  while(listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }

  let projectListObject = retrieveProjectListObject();
  let tasks = projectListObject.getProject(projectName).getTasks();

  for (let task of tasks) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    const completed = document.createElement('input');
    completed.type = 'checkbox';
    completed.classList.add('is-completed');
    completed.checked = task.isCompleted();

    const title = document.createElement('input');
    title.type = 'text';
    title.readOnly = true;
    title.classList.add('task-title');
    title.value = task.getTitle();

    const effortLevel = document.createElement('select');
    effortLevel.classList.add('effort-level');
    const easyLevel = document.createElement('option');
    easyLevel.value = '1';
    easyLevel.textContent = 'Easy';
    const mediumLevel = document.createElement('option');
    mediumLevel.value = '2';
    mediumLevel.textContent = 'Medium';  
    const hardLevel = document.createElement('option');
    hardLevel.value = '3';
    hardLevel.textContent = 'Hard';
    effortLevel.appendChild(easyLevel);
    effortLevel.appendChild(mediumLevel);
    effortLevel.appendChild(hardLevel);
    effortLevel.value = task.getEffortLevel();

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.value = task.getDueDate();

    const editButton = document.createElement('input');
    editButton.type = 'button'
    editButton.id = 'edit-task';
    editButton.value = 'Edit';

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button'
    deleteButton.id = 'delete-task';
    deleteButton.value = 'Delete';

    taskContainer.appendChild(completed);
    taskContainer.appendChild(title);
    taskContainer.appendChild(effortLevel);
    taskContainer.appendChild(dueDate);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);
    
    listContainer.appendChild(taskContainer);
  }
}

const initializePage = () => {
  const body = document.querySelector('body');

  createHeaderSection(body);
  createNavSection(body);
  createMainSection(body);

  newTaskDialog(body);
  loadTasks('default');
};

export { initializePage, loadTasks, hideTaskFormModal };
