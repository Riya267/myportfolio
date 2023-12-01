const handleColorChange = (variableName: string): void => {
    const generateRandomColor = (): string => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      return "#" + randomColor;
    };
  
    let randomColor = generateRandomColor();
  
    while (randomColor === "#ffffff" || randomColor === "#000000") {
      randomColor = generateRandomColor();
    }
  
    document.body.style.setProperty(`--${variableName}`, randomColor);

  };
  
  export default handleColorChange;
  