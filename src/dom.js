export default function homePage() {
  const body = document.querySelector('body');

  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.innerText = 'To-Do List';
  header.appendChild(title);
  body.appendChild(header);

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