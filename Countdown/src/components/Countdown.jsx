import { useState } from 'react';
import './Countdown.css'

function Countdown(){
    const [target,setTarget]=useState(null);
    return(
        <>
            <h1>Countdown Timer App</h1>
            <div id="input">
                <input type="datetime-local" id="datetime"
                    onChange={(e)=> setTarget(e.target.value)}
                />
                <button id="submit">Start</button>
            </div>

            <div id='display'>
                <ul>
                    <li><span id='days'></span>days</li>
                    <li><span id='hours'></span>hours</li>
                    <li><span id='minutes'></span>minutes</li>
                    <li><span id='seconds'></span>seconds</li>
                </ul>
            </div>
        </>
    )
}
export default Countdown;