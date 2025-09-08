export const createElement = (name) => document.createElement(name);

export const addClass = (element, className) =>
  element.classList.add(className);

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};
