---
type: lesson
slug: modifying-dom-1
title: Changing the DOM
focus: /main.js
---

# Changing the DOM

In the previous lesson, we learned how to search the DOM for elements. Now, we will learn how to change the DOM. We will learn how to add, remove, and update elements in the DOM. We will also learn how to change the style of elements.
Adding HTML, Elements, Text, Comment, Attributes, properties, and styles are some of the ways to change the DOM. Let us import our `style.css` into the `main.js` to style our page.

```ts
import './style.css';
```

## Adding HTML using `innerHTML` property

The `innerHTML` property allows us to set the HTML content of an element. It can be used to add HTML content to an element. Let's see an example:

```ts add={3-7}
const element = document.querySelector('#app');

element.innerHTML = `
  <div>
    Hello World 🌍 Updated <your name>
  </div>
`;
```

In the code above, we are setting the content of the `element` to a simple `div` with the text `Hello World 🌍 Updated <your name>`. The `innerHTML` property is a powerful tool, but it has some drawbacks. It can be slow and can cause security issues if not used properly. 

## Adding Text and Elements

Create the element using `document.createElement` and add it to the DOM using `appendChild` or `insertBefore`. Let's see an example:

```ts add={3,5,7,9}
const element = document.querySelector('#app');

const newElement = document.createElement('div');

const textContent = document.createTextNode('Hello World 🌍 Updated <your name>');

newElement.appendChild(textContent);

element.appendChild(newElement);
```

You job is to try several ways to add elements to the DOM. You can try to add an element before the existing element, or you can try to add an element after the existing element. Play with `prepend`, `append`, `before`, and `after` methods. Use the insertAdjacentElement/Text/HTML method to add an element in different positions based on the [class note](https://javascript.oluwasetemi.dev/66) provided.

## Adding Comment

Comments are not visible on the page but can be useful for developers. Try to add a comment to the DOM using `document.createComment` and `appendChild` method.
