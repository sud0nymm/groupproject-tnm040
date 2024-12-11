import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

// global var for rating
let stars = 0;

function Serving() {

  return (
    <div className='full'>
      <div className='desertshelf'>
        <DraggableBox imgsrc={"/Kanelbulle.svg"}> </DraggableBox>
        <DraggableBox imgsrc={"/Kladdkaka.svg"}> </DraggableBox>
        <DraggableBox imgsrc={"/Muffin.svg"}> </DraggableBox>
        <DraggableBox imgsrc={"/Cookie.svg"}> </DraggableBox>
      </div>
    </div>
  )
}

function DraggableBox({imgsrc}) {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [test1, setTest1] = useState(false);
  const [test2, setTest2] = useState(false);
  const navigate = useNavigate();

  if (test1) { //adds amount to stars if condition is met
    stars += 1; // currently adds 2 stars every time because of "safe mode", ask teacher for clarity later
    console.log("hej")
  }
  
  const handleDragStart = (e) => { //only for image to be draggable
    e.preventDefault();
  };

  const handleStop = (e, data) => { //handles stop of the draggable box
    console.log("Final position:", { x: data.x, y: data.y });
    goalBox(data.x, data.y, setPosition, navigate);

    console.log(imgsrc);

    if (imgsrc == "Beacon_JE6_BE2.png"){ // imgsrc is the content that is being dragged
      setTest1(true); // adds stars once
    } else {
      setTest1(false);
    }
  };

  return (

    <div className='desertbox'>
      <Draggable 
      onStop={handleStop}
      position={position} 
      >
        <div className="testbox" style={{ cursor: 'move' }}>
          <img 
          src = {imgsrc} 
          alt = "Drag this"
          style={{ width: '70px' }}
          onDragStart={handleDragStart}
          />
        </div>
      </Draggable>
    </div>
  )
}

function goalBox(xcurrent, ycurrent, setPosition, navigate) {

  const margin = 50; // px margin
  const goalx = 170; // final position in x and y for box being dragged
  const goaly= -120;
  const snapPosition = {x:goalx, y:goaly};

  if(goalx + margin >= xcurrent && goalx - margin <= xcurrent && goaly + margin >= ycurrent && goaly - margin <= ycurrent){ //checks a range for x and y variables
    console.log("in range")
    setPosition(snapPosition); 
    console.log(stars);

    setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url

      console.log("delay over");
      navigate(`/ratingpage/${stars}`); // sends page to ratingpage/"amount of stars"
    }, 1500); 
  }

}

export default Serving;
