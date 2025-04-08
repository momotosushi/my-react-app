import React, { useState } from "react";

function ColorPicker() {

const [color, setColor] = useState("#000000");

  const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  return (
    <>  
        <h3>Color Picker</h3>
        <div style={{backgroundColor: color}}>
            <p>Select a Color: <br/>{color}</p>
        </div>
        <input type="color" value={color} onChange={handleChangeColor}/>
        <br/>
    </>
  );
}

export default ColorPicker