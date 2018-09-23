import React from 'react';
import './DrumPad.css';


const drumpad = (props) => {
        return (
            <div className="drum-pad" id={props.id} onClick={props.click} letter={props.innerText}>
            <audio autoFocus className="clip" id={props.innerText} src={props.audio}></audio>
            {props.innerText}
            </div>
        )
}

export default drumpad;