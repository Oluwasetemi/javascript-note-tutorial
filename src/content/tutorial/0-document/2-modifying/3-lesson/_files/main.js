import './style.css';

const element = document.querySelector('#app');
if (element  === null) {
  // throw new Error('Element not found');
}

element.innerHTML = `
  <div>
    Hello World
  </div>
  <button id="update">Update</button>
`;

update.addEventListener('click', () => {
  // TODO: update the text content of the div element
})
