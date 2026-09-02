import React from 'react';
import Graph from './Graph';

const Stats = ({
    wpm,
    accuracy,
    correctWords,
    incorrectWords,
    graphData,
    resetTest
}) => {
    return (
        <div className="stats-wrapper">
            <div className="stats-box">
                <div className="left-stats">
                    <div className="title">WPM</div>
                    <div className="subtitle">{wpm}</div>
                    
                    <div className="title">Accuracy</div>
                    <div className="subtitle">{accuracy}%</div>
                    
                    <div className="title">Correct Words</div>
                    <div className="subtitle">{correctWords}</div>

                    <div className="title">Incorrect Words</div>
                    <div className="subtitle">{incorrectWords}</div>
                </div>
                
                <div className="right-stats">
                    <Graph graphData={graphData} />
                </div>
            </div>

            <div className="restart-btn-wrapper">
                <button className="restart-btn" onClick={resetTest}>
                    Restart
                </button>
            </div>
        </div>
    );
};

export default Stats;