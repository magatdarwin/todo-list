const ProjectList = (projects = {}) => {
  const addProject = project => {
    projects[project.getName()] = project;
  }

  const getProject = name => projects[name];

  const getProjectList = () => {
    let list = [];
    for (let key in projects) {
      list.push(projects[key]);
    }

    return list;
  };

  const removeProject = name => {
    delete projects.name;
  }

  return {
    addProject,
    getProject,
    getProjectList,
    removeProject,
  }
};

export default ProjectList;