export const saveColorToLocalStorage = (name, color) => {
  localStorage.setItem(name, color);
};

export const getColorsFromLocalStorage = (name) => localStorage.getItem(name);
