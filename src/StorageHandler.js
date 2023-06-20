import Task from './Task';
import Project from './Project';
import ProjectList from './ProjectList';
import { loadTasks, updateActiveProjectID } from './DOM';

// The returned data here will be used to store to localStorage
const getTaskData = task => {
  return {
    title: task.getTitle(),
    dueDate: task.getDueDate(),
    effortLevel: task.getEffortLevel(),
    completed: task.isCompleted(),
  }
};

// The returned data here will be used to store to localStorage
const getProjectData = project => {
  let tasks = [];

  for (let task of project.getTasks()) {
    tasks.push(getTaskData(task));
  }

  return {
    name: project.getName(),
    tasks,
  }
};

const getProjectListData = projectList => {
  let projects = {};

  for (let project of projectList.getProjectList()) {
    projects[project.getName()] =  getProjectData(project);
  }

  return {
    projects,
  }
};

// Converts the todo Data retrieved from localStorage to todo Object
const getTaskObject = taskData => {
  return Task(taskData.title, taskData.dueDate, taskData.effortLevel, taskData.completed);
};

// Converts the todo Data retrieved from localStorage to project Object
const getProjectObject = projectData => {
  let projectObject = Project(projectData.name);

  for (let task of projectData.tasks) {
    projectObject.addTask(getTaskObject(task));
  }

  return projectObject;
};

const getProjectListObject = projectListData => {
  let projectListObject = ProjectList();
  let tempProject;

  for (let key in projectListData.projects) {
    tempProject = getProjectObject(projectListData.projects[key]);
    projectListObject.addProject(tempProject);
  }

  return projectListObject;
};

const storeProjectList = projectList => {
  localStorage.setItem('projectList', JSON.stringify(getProjectListData(projectList)));
};

const retrieveProjectListObject = () => {
  return getProjectListObject(JSON.parse(localStorage.getItem('projectList')));
};

const addTask = event => {
  event.preventDefault();

  const projectName = localStorage.getItem('activeProject');
  const title = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const effortLevel = document.querySelector('#effort-level').value;

  const newTask = Task(title, dueDate, effortLevel);
  const projectListObject = retrieveProjectListObject();

  const project = projectListObject.getProject(projectName);
  project.addTask(newTask);
  storeProjectList(projectListObject);

  document.querySelector('#task-form').reset();
};

const editTask = event => {
  const taskContainer = event.target.parentElement; 
  const taskIndex = taskContainer.dataset.taskIndex;

  const editButton = taskContainer.querySelector('.edit-task');

  const title = taskContainer.querySelector('.task-title').value;
  const effortLevel = taskContainer.querySelector('.effort-level').value;
  const dueDate = taskContainer.querySelector('.due-date').value;

  const projectName = localStorage.getItem('activeProject');
  let projectListObject = retrieveProjectListObject();
  let project = projectListObject.getProject(projectName);
  let task = project.getTask(taskIndex);

  task.setTitle(title);
  task.setEffortLevel(effortLevel);
  task.setDueDate(dueDate);

  storeProjectList(projectListObject);

  taskContainer.querySelector('.save-changes').hidden = false;
  editButton.hidden = false;
  event.target.hidden = true;

  loadTasks();
};

const deleteTask = event => {
  const sureDelete = confirm('Are you sure you want to delete this task?');

  if (sureDelete) {
    const taskContainer = event.target.parentElement; 
    const taskIndex = taskContainer.dataset.taskIndex;
  
    let projectListObject = retrieveProjectListObject();
    const projectName = localStorage.getItem('activeProject');
    let project = projectListObject.getProject(projectName);
  
    project.deleteTask(taskIndex);
    storeProjectList(projectListObject);
  
    loadTasks();  
  }
};

const toggleTaskCompleted = event => {
  const taskContainer = event.target.parentElement; 
  const taskIndex = taskContainer.dataset.taskIndex;

  let projectListObject = retrieveProjectListObject();
  const projectName = localStorage.getItem('activeProject');
  let project = projectListObject.getProject(projectName);
  let task = project.getTask(taskIndex);

  task.toggleCompleted();
  storeProjectList(projectListObject);
  loadTasks();
};

const addProject = event => {
  event.preventDefault();

  const projectName = document.querySelector('#project-name').value;
  const projectListObject = retrieveProjectListObject();
  const projectNames = projectListObject.getProjectNames();

  if (projectNames.includes(projectName)) {
    alert(`${projectName} already exists. Please enter a unique project name.`);
  }
  else {
    const newProject = Project(projectName);

    projectListObject.addProject(newProject);
    storeProjectList(projectListObject);

    document.querySelector('#project-form').reset();  
  }
};

const updateActiveProject = newActiveProject => {
  const projectListObject = retrieveProjectListObject();
  const projects = projectListObject.getProjectNames();

  if (projects.includes(newActiveProject)) {
    localStorage.setItem('activeProject', newActiveProject);
    updateActiveProjectID();
    // const currentActiveProjectElement = document.querySelector('#current-project');
    // currentActiveProjectElement.removeAttribute('id');
    // const newActiveProjectElement = document.querySelector(`[data-project-name="${newActiveProject}"]`);
    // newActiveProjectElement.id = 'current-project';
  }
};

export {
  storeProjectList,
  retrieveProjectListObject,
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompleted,
  addProject,
  updateActiveProject
}