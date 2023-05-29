import './style.css';
import { initializePage } from './DOM';
import Task from './Task.js';
import Project from './Project.js';
import ProjectList from './ProjectList.js';
import StorageHandler from './StorageHandler.js';


initializePage();

let projectListObject = ProjectList();

let task1 = Task('Laundry', 'May 29, 2023', 'Easy');
let task2 = Task('Work', 'May 29, 2023', 'Hard');

let defaultProject = Project('default');
defaultProject.addTask(task1);
defaultProject.addTask(task2);

projectListObject.addProject(defaultProject); 

// Temp
let storageHandler = StorageHandler();

storageHandler.storeProjectList(projectListObject);
let retrievedProjectListObject = storageHandler.retrieveProjectListObject();
console.log('RETRIEVED PROJECT LIST OBJECT');
console.log(retrievedProjectListObject.getProjectList());
console.log(retrievedProjectListObject.getProjectList()[0].getTasks()[0].getTitle());