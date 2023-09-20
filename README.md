# Frontend Mentor - Chat app CSS illustration

This is a solution to [Chat app CSS illustration on Frontend Mentor](https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the chat interface animate on the initial load

### Screenshot

![](./screenshot.png)

### Links

- [View Code](https://github.com/elizerdim/chat-app-css-illustration)
- [Live Preview](https://elizerdim.github.io/chat-app-css-illustration/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

- 'git commit --amend' -- after staging the changes, this command adds them to the latest commit -- it should not be used after the changes have been pushed to the remote repository
- 'overflow: hidden' doesn't work well on body element, especially on mobile devices, so I used a general container div for this purpose
- vertical-align only works on inline elements
- 'position: absolute' can be used on flex items
- I used the following code for chat animation with column for flex-direction, flex-end for justify-content, and switching the position of flex items from absolute to static:

```css
.phone__chat {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ...
}

.phone__msg {
  ...
  position: absolute;
  opacity: 0;
  transform: translateY(5em);
  transition: .5s ease-in;
}

.display {
  position: static;
  opacity: 1;
  transform: translateY(0);
}
```

- I used setTimeout() in a for loop with the delay set to 'i * 1000' so that each message shows up a second after the last one

```js
for (let i = 0; messages.length > i; i++) {
  setTimeout(() => messages[i].classList.add('display'), i * 1000);
}
```

### Useful resources

- ['overflow: hidden' doesn't work on body or html elements](https://stackoverflow.com/a/14271049) - I didn't understand why 'overflow: hidden' wasn't working, so I came upon this article after some research
- [absolutely-positioned flex children](https://www.w3.org/TR/css-flexbox-1/#abspos-items) - "The absolutely positioned item behaves like it is the sole flex item in the flex container."