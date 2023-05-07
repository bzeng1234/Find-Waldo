import React from "react";
import '../Styles/mark.css'
import { useContext } from "react";
import { firebase } from "../index";
import { getDatabase, ref, onValue, get } from "firebase/database";

function Mark({top, left, handle}) {    
    let app = useContext(firebase);
    const db = getDatabase(app);
    
    const markStyle = {
        top: top-20,
        left: left-20
    };

     function handleSelection(selection) {
        const solutionRef = ref(db, 'solutions/image-one');
        onValue(solutionRef, (snapshot) => {
            const data = snapshot.val();
            const charlocation = data[selection];

            if(left >= charlocation['x-min'] && left <= charlocation['x-max'] && top >= charlocation['y-min'] && top <= charlocation['y-max']) {
                handle(true);
            } else {
                handle(false);
            }
        })
    }

    return (
        <div style={markStyle} className="mark-container">
            <div style={markStyle} className="mark"></div>
            <div className="drop-box">
                <div className="character" onClick={() => handleSelection('waldow')}>Waldo</div>
                <div className="character" onClick={() => handleSelection('willow')}>Willow</div>
                <div className="character" onClick={() => handleSelection('wizard')}>Wizard</div>
            </div>
        </div>
    );
}

export default Mark;