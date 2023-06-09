import { 
  storeProjectList, 
  retrieveProjectListObject,
  addTask,
  editTask,
  deleteTask,
  addProject,
  editProject,
  deleteProject,
  updateActiveProject,
  toggleTaskCompleted
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

  const generalContainer = document.createElement('li');
  const general = document.createElement('button');
  general.innerText = 'General';
  general.classList.add('project');
  general.dataset.projectName = 'General';
  general.addEventListener('click', () => {
    updateActiveProject('General');
    loadTasks();
  });
  general.id = 'current-project';
  generalContainer.appendChild(general);
  links.appendChild(generalContainer);

  const projects = document.createElement('li');
  const projectsHeader = document.createElement('div');
  const projectsHeaderText = document.createElement('h2')
  projectsHeader.classList.add('projects');
  projectsHeaderText.classList.add('list-header');
  projectsHeaderText.innerText = 'Projects';
  projectsHeader.appendChild(projectsHeaderText);

  const projectControls = document.createElement('li');
  const newProjectButton = document.createElement('button');
  newProjectButton.textContent = 'New Project';
  newProjectButton.id = 'new-project';
  newProjectButton.classList.add('primary-button');
  newProjectButton.addEventListener('click', showProjectForm);

  projects.appendChild(projectsHeader);

  links.appendChild(projects);
  const projectListContainer = document.createElement('ul');
  projectListContainer.classList.add('project-list'); 

  links.appendChild(projectListContainer);
  projectControls.appendChild(newProjectButton);
  links.appendChild(projectControls);
  nav.appendChild(links);
  body.appendChild(nav);
};

const createMainSection = body => {
  const main = document.createElement('main');

  const listTitleContainer = document.createElement('div');
  listTitleContainer.classList.add('list-title-container');
  const listTitle = document.createElement('h2');
  listTitle.id = 'list-title';
  listTitle.classList.add('list-header');
  const editProjectButton = document.createElement('input');
  editProjectButton.id = 'edit-project';
  editProjectButton.classList.add('primary-button');
  editProjectButton.type = 'button';
  editProjectButton.value = 'Edit';
  editProjectButton.addEventListener('click', toggleEditProject);
  const deleteProjectButton = document.createElement('input');
  deleteProjectButton.id = 'delete-project';
  deleteProjectButton.classList.add('secondary-button');
  deleteProjectButton.type = 'button';
  deleteProjectButton.value = 'Delete';
  deleteProjectButton.addEventListener('click', deleteProject);

  const saveProjectChangesButton = document.createElement('input');
  saveProjectChangesButton.id = 'save-project-changes';
  saveProjectChangesButton.classList.add('accent-button');
  saveProjectChangesButton.type = 'button';
  saveProjectChangesButton.value = 'Save Changes';
  saveProjectChangesButton.addEventListener('click', editProject);
  saveProjectChangesButton.hidden = true;
  const cancelProjectChangesButton = document.createElement('input');
  cancelProjectChangesButton.id = 'cancel-project-changes';
  cancelProjectChangesButton.classList.add('secondary-button');
  cancelProjectChangesButton.type = 'button';
  cancelProjectChangesButton.value = 'Cancel';
  cancelProjectChangesButton.addEventListener('click', toggleEditProject);
  cancelProjectChangesButton.hidden = true;

  listTitleContainer.appendChild(listTitle);
  listTitleContainer.appendChild(editProjectButton);
  listTitleContainer.appendChild(deleteProjectButton);
  listTitleContainer.appendChild(saveProjectChangesButton);
  listTitleContainer.appendChild(cancelProjectChangesButton);

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  const listControls = document.createElement('div');
  listControls.classList.add('list-controls');
  const addTodoButton = document.createElement('button');
  addTodoButton.id = 'add-todo';
  addTodoButton.classList.add('primary-button');
  addTodoButton.textContent = 'New Task';
  addTodoButton.addEventListener('click', showTaskModal);
  listControls.appendChild(addTodoButton);

  const completedTitle = document.createElement('h3');
  completedTitle.id = 'completed-title';
  completedTitle.classList.add('list-header');
  const completedContainer = document.createElement('div');
  completedContainer.classList.add('completed-container');

  main.appendChild(listTitleContainer);
  main.appendChild(listContainer)
  main.appendChild(listControls);
  main.appendChild(completedTitle);
  main.appendChild(completedContainer);
  body.appendChild(main);
};

const newProjectDialog = body => {
  const formContainer = document.querySelector('#task-modal');

  const projectForm = document.createElement('form');
  projectForm.id = 'project-form';

  const nameGroup = document.createElement('div');
  nameGroup.classList.add('input-group');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name';
  nameLabel.htmlFor = 'project-name';
  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'project-name';
  name.placeholder = 'Project Name';
  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(name);

  const controlGroup = document.createElement('div');
  controlGroup.classList.add('control-group');
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Add Project';
  submitButton.id = 'add-new-project';
  submitButton.classList.add('accent-button');
  submitButton.addEventListener('click', event => {
    addProject(event);
    hideProjectForm();
    loadProjects();
  });
  controlGroup.appendChild(submitButton);
  const cancelButton = document.createElement('input');
  cancelButton.type = 'button';
  cancelButton.value = 'Cancel';
  cancelButton.id = 'cancel-new-project';
  cancelButton.classList.add('secondary-button');
  cancelButton.addEventListener('click', hideProjectForm);
  controlGroup.appendChild(cancelButton);

  projectForm.appendChild(nameGroup);
  projectForm.appendChild(controlGroup);
  formContainer.appendChild(projectForm);
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
  submitButton.classList.add('accent-button');
  submitButton.addEventListener('click', event => {
    addTask(event);
    hideTaskFormModal();
    loadTasks();
  });
  controlGroup.appendChild(submitButton);
  const cancelButton = document.createElement('input');
  cancelButton.type = 'button';
  cancelButton.value = 'Cancel';
  cancelButton.id = 'cancel-new-task';
  cancelButton.classList.add('secondary-button');
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
  document.querySelector('#task-form').style.display = 'flex';
};

const hideTaskFormModal = () => {
  const taskModal = document.querySelector('#task-modal');
  taskModal.style.display = 'none';
  const taskForm = document.querySelector('#task-form');
  taskForm.style.display = 'none';
  taskForm.reset();
};

const showProjectForm = () => {
  document.querySelector('#task-modal').style.display = 'block';
  document.querySelector('#project-form').style.display = 'flex';
};

const hideProjectForm = () => {
  const taskModal = document.querySelector('#task-modal');
  taskModal.style.display = 'none';
  const projectForm = document.querySelector('#project-form');
  projectForm.style.display = 'none';
  projectForm.reset();
};

const toggleEditTask = event => {
  const isEdit = event.target.classList.contains('edit-task');
  const taskContainer = event.target.parentElement;

  // Disable Edit and Delete buttons of other tasks
  const taskContainers = document.querySelectorAll('.task-container');
  for (let otherTaskContainer of taskContainers) {
    if (otherTaskContainer !== taskContainer) {
      otherTaskContainer.querySelector('.edit-task').disabled = true;
      otherTaskContainer.querySelector('.delete-task').disabled = true;
    }
  }

  taskContainer.querySelector('.task-title').readOnly = !isEdit;
  taskContainer.querySelector('.effort-level').disabled = !isEdit;
  taskContainer.querySelector('.due-date').readOnly = !isEdit;

  taskContainer.querySelector('.save-changes').hidden = !isEdit;
  taskContainer.querySelector('.cancel-changes').hidden = !isEdit;
  taskContainer.querySelector('.edit-task').hidden = isEdit;
  taskContainer.querySelector('.delete-task').hidden = isEdit;

  if (!isEdit) {
    loadTasks(); // Resets any changes made to the tasks
  }
};

const toggleEditProject = event => {
  const isEdit = event.target.id === 'edit-project';
  const projectNameContainer = event.target.parentElement;

  const listTitle = projectNameContainer.querySelector('#list-title');
  listTitle.contentEditable = isEdit;
  listTitle.classList.add('editable');

  projectNameContainer.querySelector('#edit-project').hidden = isEdit;
  projectNameContainer.querySelector('#delete-project').hidden = isEdit;
  projectNameContainer.querySelector('#save-project-changes').hidden = !isEdit;
  projectNameContainer.querySelector('#cancel-project-changes').hidden = !isEdit;

  if (!isEdit) {
    loadTasks(); // Resets any changes made to the Project
    listTitle.classList.remove('editable');
  }
};

const loadTasks = () => {
  const projectName = localStorage.getItem('activeProject');
  const projectListObject = retrieveProjectListObject();

  const listTitleContainer = document.querySelector('.list-title-container');
  listTitleContainer.dataset.projectIndex = projectListObject.getProjectIndex(projectName);
  const listTitle = document.querySelector('#list-title');
  listTitle.innerText = projectName;

  const listContainer = document.querySelector('.list-container');
  while(listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }

  const completedContainer = document.querySelector('.completed-container');
  while(completedContainer.firstChild) {
    completedContainer.removeChild(completedContainer.firstChild);
  }

  const tasks = projectListObject.getProject(projectName).getTasks();

  let completedTasks = 0;
  for (let index in tasks) {
    const task = tasks[index];
    const taskName = task.getTitle();
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.dataset.taskIndex = index;

    const completed = document.createElement('input');
    completed.type = 'checkbox';
    completed.classList.add('is-completed');
    const taskCompleted = task.isCompleted();
    completed.checked = taskCompleted;
    completed.addEventListener('click', toggleTaskCompleted);

    const title = document.createElement('input');
    title.type = 'text';
    title.readOnly = true;
    title.classList.add('task-title');
    title.value = taskName;

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
    effortLevel.disabled = true;

    const dueDate = document.createElement('input');
    dueDate.classList.add('due-date');
    dueDate.type = 'date';
    dueDate.value = task.getDueDate();
    dueDate.readOnly = true;

    const editButton = document.createElement('input');
    editButton.type = 'button'
    editButton.classList.add('edit-task', 'primary-button');
    editButton.value = 'Edit';
    editButton.addEventListener('click', toggleEditTask);

    const saveChangesButton = document.createElement('input');
    saveChangesButton.type = 'button';
    saveChangesButton.classList.add('save-changes', 'accent-button');
    saveChangesButton.value = 'Save Changes';
    saveChangesButton.addEventListener('click', editTask);
    saveChangesButton.hidden = true;

    const deleteButton = document.createElement('input');
    deleteButton.type = 'button'
    deleteButton.classList.add('delete-task', 'secondary-button');
    deleteButton.value = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    const cancelButton = document.createElement('input');
    cancelButton.type = 'button';
    cancelButton.classList.add('cancel-changes', 'secondary-button');
    cancelButton.value = 'Cancel';
    cancelButton.addEventListener('click', toggleEditTask);
    cancelButton.hidden = true;

    taskContainer.appendChild(completed);
    taskContainer.appendChild(title);
    taskContainer.appendChild(effortLevel);
    taskContainer.appendChild(dueDate);
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(saveChangesButton);
    taskContainer.appendChild(deleteButton);
    taskContainer.appendChild(cancelButton);

    if (taskCompleted) {
      completedContainer.appendChild(taskContainer);
      completedTasks++;
    }
    else {
      listContainer.appendChild(taskContainer);
    }
  }

  const completedTitle = document.querySelector('#completed-title');
  completedTitle.innerText = completedTasks > 0 ? 'Completed Tasks' : '';
};

const updateActiveProjectID = () => {
  const currentActiveProjectElement = document.querySelector('#current-project');

  if (currentActiveProjectElement !== null) {
    currentActiveProjectElement.removeAttribute('id');
  }

  const newActiveProject = localStorage.getItem('activeProject');
  const newActiveProjectElement = document.querySelector(`[data-project-name="${newActiveProject}"]`);
  newActiveProjectElement.id = 'current-project';
};

const loadProjects = () => {
  const projectListContainer = document.querySelector('.project-list');

  // Refresh project list
  while(projectListContainer.firstChild) {
    projectListContainer.removeChild(projectListContainer.firstChild);
  }

  const projectListObject = retrieveProjectListObject();
  let projectList = projectListObject.getProjectList();
  // projectList.splice(0, 1); // Removes 'General' project
  for (let project of projectList) {
    const projectName = project.getName();
    if (projectName !== 'General') {
      const projectContainer = document.createElement('li');
      const projectButton = document.createElement('button');
      projectButton.innerText = projectName;
      projectButton.classList.add('project');
      projectButton.dataset.projectName = projectName;
      projectButton.addEventListener('click', () => {
        updateActiveProject(projectName);
        loadTasks();
      });
      projectContainer.appendChild(projectButton);
      projectListContainer.appendChild(projectContainer);
    }
  }

  updateActiveProjectID();
};

const initializePage = () => {
  const body = document.querySelector('body');

  createHeaderSection(body);
  createNavSection(body);
  createMainSection(body);
  newTaskDialog(body);
  newProjectDialog(body);

  updateActiveProject('General');
  loadProjects();
  loadTasks();
};

export { 
  initializePage, 
  loadTasks,
  hideTaskFormModal,
  updateActiveProjectID,
  loadProjects,
  toggleEditProject 
};
