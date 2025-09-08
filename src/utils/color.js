export const getRandomColor = () => {
  // تولید رنگ تصادفی به صورت HEX
  return "#" + (Math.floor(Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

export const getRandomGradient = () => {
    const angle = Math.floor(Math.random() * 360);
return `linear-gradient(${angle}deg, ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
};

