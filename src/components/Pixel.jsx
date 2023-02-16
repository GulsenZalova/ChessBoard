import React from 'react'
import { useState } from 'react';
function Pixel(props) {
      const {selectedColor,id,boxes,setDigonalColor} = props
      const [pixelColor, setPixelColor] = useState(selectedColor);
      const [originalColor, changeOriginalColor] = useState(true);
    function applyColor() {
        const applyRow=Math.floor((id-1)/8)
        const applyCol=(id-1)%8
        const diogonal=boxes.filter((x)=>{
            const diagonalRow=Math.floor((x-1)/8)
            const diagonalCol=(x-1)%8
            return Math.abs(diagonalRow-applyRow)===Math.abs(diagonalCol-applyCol)
        })
        if(originalColor)
        {
                if(selectedColor=="white" || selectedColor=="red"){
                    setPixelColor("red");
                    changeOriginalColor(false);
                }
        
        }
        else{
            setPixelColor(selectedColor);
            changeOriginalColor(true);
        }
      }
    return (<div 
        className="tile" 
        onClick={applyColor}
        style={{ backgroundColor: pixelColor }}
    ></div>)
  
}

export default Pixel
