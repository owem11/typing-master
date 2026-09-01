import React from "react";
import { useTestMode } from "../Context/TestModeContext";

const UpperMenu = ({countDown}) => {

const {setTestTime} = useTestMode();

const updateTime = (e) => {
    setTestTime(Number(e.target.id));
}


    return (
        <div className="upper-menu">
        <div className="countdown">
            {countDown}
            </div>
            <div className="modes">
                <div className="time-mode" id={15} onClick={updateTime}>15</div>
                <div className="time-mode" id={30} onClick={updateTime}>30</div>
                <div className="time-mode" id={60} onClick={updateTime}>60</div>
                <div className="time-mode" id={120} onClick={updateTime}>120</div>
            </div>
        </div>
    )
}

export default UpperMenu;