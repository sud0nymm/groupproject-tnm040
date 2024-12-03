import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './Ratingstyle.css'
import { useParams } from 'react-router-dom';

function RatingPage() {

    const { id } = useParams();
    const staramount = parseInt(id, 10);
    console.log(staramount);// is the amount of stars the user got, sent in by the URL

    function stars() {
        const starsArray = new Array(staramount).fill(1);
        const rating = starsArray.map((element, i) => < img className='stars' src={"../star.svg"} key={i} alt="Girl in a jacket" />)
        return rating;
    }

    return (
        <> <div className='sliding-background'>
            <Link to="/"> <button className="replaybutton"></button></Link>
            <div className='box'>
                <div className='text'>You got {staramount} out of 3 stars</div>
                <div className='flex'>{stars()}</div>
            </div>

        </div>
        </>
    )
}

export default RatingPage
