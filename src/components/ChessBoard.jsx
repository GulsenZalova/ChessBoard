import React, { useEffect, useState } from 'react'
import Pixel from './Pixel'
const horizontalAxis = [ "a", "b","c","d","e","f","g","h"]
const verticalAxis = [ "1", "2","3", "4","5","6","7","8"]
function ChessBoard() {
    const [diagonalColor,setDigonalColor]=useState([])
    let board=[]
    let boxes=[]
    let id=0
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
        for (let i = 0; i < horizontalAxis.length; i++) {
            id=id+1
            boxes.push(id)
            if((i+j)%2===0)
            {
                board.push(<Pixel key={i.toString()+j.toString()}  id={id}   boxes={boxes} selectedColor="black"/>)
            }
            else
            {
                board.push(<Pixel key={i.toString()+j.toString()} id={id} diagonalColor={diagonalColor} setDigonalColor={setDigonalColor} boxes={boxes} selectedColor= "white"/>)             
            }
            
        }
    };
   
    return (
        <div className='container'>
            <div id="chessboard">
                {board}
            </div>
        </div>
    )
}

export default ChessBoard
