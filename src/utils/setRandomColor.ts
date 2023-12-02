const handleColorChange = (variableName: string): void => {
  let r,g,b;
    const generateRandomColor = (): string => {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };
  
    let randomColor = generateRandomColor();
  
    while (randomColor === "#ffffff" || randomColor === "#000000") {
      randomColor = generateRandomColor();
    }
  
    document.body.style.setProperty(`--${variableName}`, randomColor);

  };
  
  export default handleColorChange;
  