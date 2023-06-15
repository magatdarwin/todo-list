import './style.css';
import { initializePage } from './DOM.js';
import { 
  storeProjectList, 
  retrieveProjectListObject 
} from './StorageHandler.js';

import Task from './Task.js';
import Project from './Project.js';
import ProjectList from './ProjectList.js';


const main = (() => {
  const initializeDefaultProject = projectListObject => {
    if (projectListObject.getProject(0) === undefined) {
      let defaultProject = Project('default');
      projectListObject.addProject(defaultProject);
    }
  };

  const initializeProjectList = () => {
    let projectListObject = localStorage.getItem('projectList');

    if (projectListObject === null) {
      projectListObject = ProjectList();
      initializeDefaultProject(projectListObject);
      storeProjectList(projectListObject);
    }
  };


  initializeProjectList();
  initializePage();
})();

main;