import React from "react";

function Result({hit}) {
    return (
        <div className="results">{(hit) ? 'You Hit' : 'You Missed!'}</div>
    )
}

export default Result;