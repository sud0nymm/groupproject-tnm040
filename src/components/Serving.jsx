import { useState } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

function Serving() {

  let stars = useParams();

  return (
    <div className='servingbackground'>
      <div className='full'>
        <div className='orderbox2' />
        <div className='desertshelf'>
          <DraggableBox imgsrc={"/Kanelbulle.svg"} stars = {stars.id}> </DraggableBox>
          <DraggableBox imgsrc={"/Kladdkaka.svg"} stars = {stars.id}> </DraggableBox>
          <DraggableBox imgsrc={"/Muffin.svg"} stars = {stars.id}> </DraggableBox>
          <DraggableBox imgsrc={"/Cookie.svg"} stars = {stars.id}> </DraggableBox>
        </div>
      </div>
    </div>
  )
}

function DraggableBox({imgsrc, stars}) {

  let staramount = parseInt(stars, 10);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgWidth, setImgWidth] = useState(70); // state for dynamic width

  const navigate = useNavigate();
  
  const handleDragStart = (e) => { //only for image to be draggable
    e.preventDefault();
  };

  const handleStop = (e, data) => { //handles stop of the draggable box

    goalBox(data.x, data.y, setPosition, navigate, staramount);
    console.log("Final position:", { x: data.x, y: data.y });

    const margin = 50; // px margin
    const goalx = -30; // final position in x and y for box being dragged
    const goaly= -150;
    if(goalx + margin >= data.x && goalx - margin <= data.x && goaly + margin >= data.y && goaly - margin <= data.y){ //checks a range for x and y variables
      setImgWidth(100);
    } else {
      setImgWidth(70);
    }


    if (imgsrc == "/Muffin.svg"){ // imgsrc is the content that is being dragged
      staramount += 1;
    }

  };

  return (

    <div className='desertbox'>
      <Draggable 
      onStart={handleDragStart} 
      onStop={handleStop}
      position={position} 
      >
        <div className="testbox" style={{ cursor: 'move' }}>
          <img 
          src = {imgsrc} 
          alt = "Drag this"
          style={{ width: `${imgWidth}px` }}
          onDragStart={(e) => e.preventDefault()} // Prevent native drag
          />
        </div>
      </Draggable>
    </div>
  )
}

function goalBox(xcurrent, ycurrent, setPosition, navigate, stars) {

  const margin = 50; // px margin
  const goalx = -30; // final position in x and y for box being dragged
  const goaly= -150;
  const snapPosition = {x:goalx, y:goaly};

  if(goalx + margin >= xcurrent && goalx - margin <= xcurrent && goaly + margin >= ycurrent && goaly - margin <= ycurrent){ //checks a range for x and y variables
    console.log("in range")
    setPosition(snapPosition); 

    setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url

      console.log("delay over");
      navigate(`/ratingpage/${stars}`); // sends page to ratingpage/"amount of stars"
    }, 1500); 
  }

}

export default Serving;
