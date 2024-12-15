import { useState, useRef } from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import './componentStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

function Serving() {

  let stars = useParams();
  const [hasSnapped, setHasSnapped] = useState(false); 

  return (
    <div className='servingbackground'>
      {!hasSnapped && <div className='goalBox'></div>}      
      <div className='full'>
        <div className='orderbox2' />
        <div className='desertshelf'>
          <DraggableBox imgsrc={"/Kanelbulle.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Kladdkaka.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Muffin.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
          <DraggableBox imgsrc={"/Cookie.svg"} stars = {stars.id} setHasSnapped={setHasSnapped}  hasSnapped={hasSnapped}> </DraggableBox>
        </div>
      </div>
    </div>
  )
}

function DraggableBox({imgsrc, stars, setHasSnapped, hasSnapped}) {

  let staramount = parseInt(stars, 10);
  const dragRef = useRef(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgWidth, setImgWidth] = useState(70); // state for dynamic width
  

  const navigate = useNavigate();
  
  const handleDragStart = (e) => { //only for image to be draggable
    e.preventDefault();
  };

  const handleStop = (e, data) => { //handles stop of the draggable box

    const margin = 50; // px margin
    const goalx = xPos(imgsrc); // final position in x and y for box being dragged
    const goaly= -152;

    const snapPosition = {x:xPos(imgsrc), y:goaly}; // the position of x is dynamic because the box takes its own position which is relative

    if (imgsrc == "/Muffin.svg"){ // imgsrc is the content that is being dragged
      staramount += 1;
    }

    if(goalx + margin >= data.x && goalx - margin <= data.x && goaly + margin >= data.y && goaly - margin <= data.y){ //checks a range for x and y variables
      setImgWidth(100);
      setPosition(snapPosition); 
      setHasSnapped(true);

      setTimeout(() => { // timer that later redirects the page to the ratingpage, with dynamic url

        navigate(`/ratingpage/${staramount}`); // sends page to ratingpage/"amount of stars"
      }, 1500); 
    } else {
      setImgWidth(70);
    }

  };

  return (

    <div className='desertbox'>
      <Draggable 
      nodeRef={dragRef}
      onStart={handleDragStart} 
      onStop={handleStop}
      position={position}
      disabled={hasSnapped} // Disable dragging if hasSnapped is true
      >
        <div className="testbox" style={{ cursor: 'move' }}
        ref={dragRef}
        >
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

function xPos(imgsrc){
  
  switch (imgsrc){ // dynamically picking the goal area
    case "/Kanelbulle.svg": return 137;
    case "/Kladdkaka.svg": return 58;
    case "/Muffin.svg": return -20;
    case "/Cookie.svg": return -98;
  }
  
  return 0;
}

export default Serving;
