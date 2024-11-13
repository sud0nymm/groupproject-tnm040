import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import {DraggableCore} from 'react-draggable'; // <DraggableCore>
import './componentStyles.css'


function TakeOrder(){

    return (
        <div className='takeOrder'>
          
          
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

export default TakeOrder
