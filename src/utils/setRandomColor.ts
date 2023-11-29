const handleColorChange = (variableName:string): void => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.setProperty(`--${variableName}`, "#" + randomColor);
}

export default handleColorChange