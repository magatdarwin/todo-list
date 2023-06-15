// const ProjectList = (projects = {}) => {
const ProjectList = (projects = []) => {
  const addProject = project => {
    // projects[project.getName()] = project;
    projects.push(project);
  }

  // const getProject = name => projects[name];

  // const getProject = index => projects[index];
  
  const getProject = projectName =>  {
    const index = projects.map(e => e.getName()).indexOf(projectName);
    return projects[index];
  }

/*   const getProjectList = () => {
    let list = [];
    for (let key in projects) {
      list.push(projects[key]);
    }

    return list;
  }; */

  const getProjectList = () => {
    let list = [];
    for (let project of projects) {
      list.push(project);
    }

    return list;
  };

  const removeProject = index => {
    projects.splice(index, 1);
  }

  return {
    addProject,
    getProject,
    getProjectList,
    removeProject,
  }
};

export default ProjectList;