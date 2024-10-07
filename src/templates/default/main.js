import { setupCounter } from './counter.js';
import './style.css';

const element = document.querySelector('#app');

if (element  === null) {
  // throw new Error('Element not found');
}

element.innerHTML = `
  <div>
    <h1>Helloo, Karatu Frontendstars</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click <span><a href="https://javascript.oluwasetemi.dev/1" target="_blank">here</a></span> to go to the class notes
    </p>
  </div>
`;

const counter = document.querySelector('#counter')
setupCounter(counter);
