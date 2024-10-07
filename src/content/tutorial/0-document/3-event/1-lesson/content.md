---
type: lesson
title: Simple Event Listener
focus: /counter.js
---

# Events

Events are actions that happen in the browser that you can listen for and respond to. For example, when a user clicks a button, that's an event. When a user submits a form, that's an event. When a user presses a key, that's an event. When the browser finishes loading a page, that's an event.

In this lesson, we'll learn how to listen for events and respond to them using event listeners. We'll use a simple counter app as an example to demonstrate how events work in JavaScript.

```js
export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  setCounter(0);
}
```

Let's look at the preview on the right for a moment and try to click on the button that says `counter is 0`. We'll notice that it doesn't work. From the previous lesson, we know that the `setupCounter` function initializes our counter app. However, a crucial component is missing: an event listener for the button.

```js add={9}
export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => setCounter(counter + 1));

  setCounter(0);
}
```

In the code snippet above, we call the `addEventListener` method to attach a `click` event listener to the button element. When a click is detected, we execute a callback function that increments the counter and updates the `innerHTML` accordingly.

Now, if we click on the button, we'll see the counter incrementing. This is the power of event listeners in web development. They enable our applications to respond to user actions and create interactive experiences.

In the next lesson, we'll explore different types of events and how we can use them to build more complex applications.

Your goal is to keep watching all the videos on the LMS and read the JavaScript Node. Don't forget to practice coding every day. You can do it! 🚀

### Remember this code snippet I dropped on slack for the LMS create-react-app issues on window

```sh
# Instead of npx live-server . | npm install --global liver-server | npm i -g live-server then run live-server . 
npm i -g live-server
live-server . 


# Instead of npx create-react-app my-app | npm install --global create-react-app | npm i -g create-react-app then run create-react-app my-app
npm i -g create-react-app
create-react-app my-app

# Use Vite instead of create-react-app
npm create vite@latest 
```
