import Task from './Task.js';
import Project from './Project.js';
import StorageHandler from './StorageHandler.js';

import ProjectList from './ProjectList.js';

const main = () => {
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
  

  let projectListObject = ProjectList();

  let task1 = Task('Laundry', 'May 29, 2023', 'Easy');
  let task2 = Task('Work', 'May 29, 2023', 'Hard');

  let defaultProject = Project('default');
  defaultProject.addTask(task1);
  defaultProject.addTask(task2);

  projectListObject.addProject(defaultProject); // STOPPED HERE
  // TODO: getProjectListData, getProjectListObject, storeProjectList, retrieveProjectList
  
  /* 
  // Flow of getting the JSON Data then converting to Object
  console.log(getProjectData(defaultProject));

  let task1Data = getTaskData(task1);
  let task1Object = getTaskObject(task1Data);
  
  console.log(task1Object.getTitle()); 
  */

  // Temp
/*   let projectListData = getProjectListData(projectListObject);

  let retrievedProjectListObject = getProjectListObject(projectListData);
  console.log('RETRIEVED PROJECT LIST OBJECT');
  console.log(retrievedProjectListObject.getProjectList()[0].getItems()[0].getTitle());
 */

  storeProjectList(projectListObject);
  let retrievedProjectListObject = retrieveProjectListObject();
  console.log('RETRIEVED PROJECT LIST OBJECT');
  console.log(retrievedProjectListObject.getProjectList());
  // console.log(retrievedProjectListObject.getProjectList()[0].getTasks()[0].getTitle());

}

export default main;