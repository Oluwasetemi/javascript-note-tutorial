---
type: lesson
slug: modifying-dom-2
title: Changing the DOM 2
focus: /main.js
---

# Changing the DOM 2

In the previous lesson, we learned how to add HTML, Element, Text and Comment nodes to the DOM. In this lesson, we will learn how to remove nodes from the DOM with `remove` method of the element.

## Removing Nodes

The `remove` method is used to remove the element from the DOM. Let's see an example:

```ts add={3-5}
const element = document.querySelector('#app');

element.remove(); // removes the element from the DOM
```

:::danger
The `remove` method can be dangerous if not used properly. It removes the element from the DOM and all its children. Be careful when using it.
:::

In the code above, we are removing the element with the id `app` from the DOM. The `remove` method is a simple and effective way to remove an element from the DOM.
