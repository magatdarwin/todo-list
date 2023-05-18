export default function homePage() {
  const body = document.querySelector('body');

  const heading = document.createElement('heading');
  const title = document.createElement('h1');
  title.innerText = 'To-Do List';
  heading.appendChild(title);
  body.appendChild(heading);

  const nav = document.createElement('nav');
  const links = document.createElement('ul');
  const home = document.createElement('li');
  home.innerText = 'Home';
  links.appendChild(home);
  const projects = document.createElement('li');
  projects.innerText = 'Projects';
  links.appendChild(projects);
  nav.appendChild(links);
  body.appendChild(nav);

  const main = document.createElement('main');
  body.appendChild(main);
}