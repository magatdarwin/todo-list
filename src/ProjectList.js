const ProjectList = (projects = []) => {
  const addProject = project => {
    projects.push(project);
  };

  const getProject = projectName =>  {
    const index = projects.map(e => e.getName()).indexOf(projectName);
    return projects[index];
  };

  const getProjectByIndex = index => projects[index];

  const getProjectIndex = projectName => {
    const list = getProjectNames();
    return list.indexOf(projectName);
  };

  const getProjectList = () => {
    let list = [];
    for (let project of projects) {
      list.push(project);
    }

    return list;
  };

  const getProjectNames = () => {
    let list = [];
    for (let project of projects) {
      list.push(project.getName());
    }

    return list;
  };

  const removeProject = index => {
    projects.splice(index, 1);
  };

  return {
    addProject,
    getProject,
    getProjectByIndex,
    getProjectIndex,
    getProjectList,
    getProjectNames,
    removeProject,
  }
};

export default ProjectList;