import todo from './todo.js';
import project from './project';


const main = () => {
  let projectsList = {};
  
  const addProject = (projectsList, project) => {
    projectsList[project.getName()] = project;
  };
  
  const addNewTask = event => {
    event.preventDefault();
    console.log(projectsList.default.getName());
  };

  addProject(projectsList, project('default'));
  const submitNewTask = document.querySelector('#submit-new-task');
  submitNewTask.addEventListener('click', addNewTask);
};

export default main;