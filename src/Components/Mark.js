import React from "react";
import '../Styles/mark.css'

function Mark({top, left}) {

    const markStyle = {
        top: top-20,
        left: left-20
    };

    function handleSelection(selection) {
        console.log(selection);
    }

    return (
        <div style={markStyle} className="mark-container">
            <div style={markStyle} className="mark"></div>
            <div className="drop-box">
                <div className="character" onClick={() => handleSelection('Waldo')}>Waldo</div>
                <div className="character" onClick={() => handleSelection('Willow')}>Willow</div>
                <div className="character" onClick={() => handleSelection('Wizard')}>Wizard</div>
            </div>
        </div>
    );
}

export default Mark;