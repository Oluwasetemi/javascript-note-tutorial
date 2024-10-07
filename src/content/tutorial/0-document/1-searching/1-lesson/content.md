---
type: lesson
title: Getting Started With DOM
focus: /main.js
---

# Searching the DOM

Hey there in addition to the JavaScript Class Note, here is a live tutorial to walk you through the intricacies of setting up IDE and running the code. Save your time to focus on just learning.

To kick things off, we have prepared a small demo lesson for you, where we'll dive into the concept of event handling in JavaScript. Our task is to resuscitate our hello world app by introducing the crucial ability to search the DOM.

Let's look at the preview on the right for a moment, you will notice you can only see a blank page. `element` variable is not defined yet. 

**Your task is to find the element with the id `app` and assign it to the `element` variable.**


```ts add={2}
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

```

[Document section of the note](https://javascript.oluwasetemi.dev/56) describes window, DOM, CSSOM, and BOM. Understanding the DOM tree structure is crucial to manipulate the DOM. Being able to walk through the DOM tree structure is a fundamental skill for a web developer.

Searching the DOM using `document.querySelector` is a common practice in web development. It allows us to find an element by its CSS selector. In this case, we are looking for an element with the id `app`. Another alternative is `document.getElementById` which is faster than `document.querySelector` because it go straight through ID instead of CSS selector.

Another interesting thing to pay attention to is the `element.innerHTML` property. It allows us to set the HTML content of an element. In this case, we are setting the content of the `element` to a simple `div` with the text `Hello World`. We will talk about this in the coming lessons.
