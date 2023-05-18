import testPrint from './todo';
import './style.css';

testPrint();
const body = document.querySelector('body');
const text = document.createElement('p');
text.innerText = 'Hello world';
text.classList.add('hello');
body.appendChild(text);