import Task from './Task';
import Project from './Project';
import ProjectList from './ProjectList';
import { loadTasks, hideTaskFormModal } from './DOM';

// The returned data here will be used to store to localStorage
const getTaskData = task => {
  return {
    title: task.getTitle(),
    dueDate: task.getDueDate(),
    effortLevel: task.getEffortLevel(),
    completed: task.isCompleted(),
  }
}

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
}

const getProjectListData = projectList => {
  let projects = {};

  for (let project of projectList.getProjectList()) {
    projects[project.getName()] =  getProjectData(project);
  }

  return {
    projects,
  }
}

// Converts the todo Data retrieved from localStorage to todo Object
const getTaskObject = taskData => {
  return Task(taskData.title, taskData.dueDate, taskData.effortLevel, taskData.completed);
}

// Converts the todo Data retrieved from localStorage to project Object
const getProjectObject = projectData => {
  let projectObject = Project(projectData.name);

  for (let task of projectData.tasks) {
    projectObject.addTask(getTaskObject(task));
  }

  return projectObject;
}

const getProjectListObject = projectListData => {
  let projectListObject = ProjectList();
  let tempProject;

  for (let key in projectListData.projects) {
    tempProject = getProjectObject(projectListData.projects[key]);
    projectListObject.addProject(tempProject);
  }

  return projectListObject;
}

const storeProjectList = projectList => {
  localStorage.setItem('projectList', JSON.stringify(getProjectListData(projectList)));
}

const retrieveProjectListObject = () => {
  return getProjectListObject(JSON.parse(localStorage.getItem('projectList')));
}

const addTask = event => {
  event.preventDefault();
  
  const projectName = 'default';
  const title = document.querySelector('#title').value;
  const dueDate = document.querySelector('#due-date').value;
  const effortLevel = document.querySelector('#effort-level').value;

  const newTask = Task(title, dueDate, effortLevel);
  const projectListObject = retrieveProjectListObject();

  const project = projectListObject.getProject(projectName);
  project.addTask(newTask);
  storeProjectList(projectListObject);

  document.querySelector('#task-form').reset();
}

export {
  storeProjectList,
  retrieveProjectListObject,
  addTask,
}