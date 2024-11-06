import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import './componentStyles.css'


function FreePlay(){
    
    const handleImageLoad = () => {
        console.log(`Image loaded successfully: ${image}`);
    };
    
    const handleImageError = () => {
        console.error(`Failed to load image: ${image}`);
    }; 

    const image = "/Beacon_JE6_BE2.png";

    return(

    <div>
        <div> <p> Free Play Page</p> </div>

        <img  /* image example, see image variable */ 
            src={image}
            alt="hello"
            onLoad={handleImageLoad}  
            onError={handleImageError} 
        />

    </div>     

    )
}

function DraggableBox(){

    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Draggable>
          <div className= "testbox">
            <p>Drag me around!</p>
          </div>
        </Draggable>
      </div>
    )
}

export default FreePlay