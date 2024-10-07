---
type: lesson
slug: modifying-dom-3
title: Changing the DOM 3
focus: /main.js
---

# Changing the DOM 3

In the previous lesson, we learned how to remove HTML, Element, Text and Comment nodes to the DOM. In this lesson, we will learn how to update text, element or HTML.

## Updating Text

The `textContent` property allows us to set the text content of an element. Using it with `+=` operator, we can append text to the existing text content. Let's see an example:

```ts add={3}
const element = document.querySelector('#app');

element.textContent += ' 🌍 Updated <your name>';
```

In the code above, we are appending the text `🌍 Updated <your name>` to the existing text content of the `element`. The `textContent` property is a simple and effective way to update the text content of an element. The trick is the modify in place operator in JavaScript that works on string and any valid datatype. Modify in place is arithmetic operator combined with assignment operator which assigns the new value to the existing value.

:::tip
The `textContent` property is a simple and effective way to update the text content of an element.
:::

```js
let text = 'Hello';
text += ' World';

console.log(text); // Hello World
```

## Updating Element

The `replaceChild` method allows us to replace an existing child element with a new child element. Let's see an example:

```ts add={17}
const element = document.querySelector('#app');

element.innerHTML = `
  <div>
    Hello World
  </div>
  <button id="update">Update</button>
`;

const newElement = document.createElement('div');

const textContent = document.createTextNode('Hello World 🌍 Updated <your name>')

newElement.appendChild(textContent);

element.replaceChild(newElement, element.firstElementChild);
```

:::tip
The `replaceChild` method allows us to replace an existing child element with a new child element.
:::


In the code above, we are replacing the first child element of the `element` with a new `div` element containing the text `Hello World 🌍 Updated <your name>`. The `replaceChild` method is a powerful tool, but it has some drawbacks. It can be slow and can cause security issues if not used properly.

## Updating HTML

```ts
export function setupCounter(element) {
  // TODO: Implement the setupCounter function
}
```

Your task is to implement the `setupCounter` function that updates the `innerHTML` of the `element` with the counter value. The counter value should be incremented by 1 each time the button is clicked. You can use the `addEventListener` method to listen for the `click` event on the button and update the counter value accordingly.

Next up, we will learn more about events.🚀
