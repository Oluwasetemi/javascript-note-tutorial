// Correct implementation(can you try `getElementById` instead of `querySelector`)
const element = document.querySelector('#app');

if (element  === null) {
  // throw new Error('Element not found');
}

element.innerHTML = `
  <div>
    Hello World
  </div>
`;
