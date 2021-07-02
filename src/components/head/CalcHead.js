
import { useLayoutEffect, useRef, useState } from 'react';
import './CalcHead.css';

function CalcHead({ inputVal, resultVal }) {
    const [fontSize, setFontSize] = useState(4);

    const outputEl = useRef();

    useLayoutEffect(() => {
        if (
            outputEl.current.scrollWidth > outputEl.current.clientWidth && 
            fontSize > 0
        ) setFontSize(fontSize - 0.2);
        else if (resultVal.length === 0) setFontSize(4);
    }, [fontSize, outputEl, resultVal]);

    return (
        <div id="calc-head">
            <div id="calc-screen">
                <div className="spacer"></div>
                <div ref={outputEl} style={{fontSize: fontSize + 'em'}} id="output">{resultVal}</div>
                <div id="input">{inputVal}</div>
            </div>
        </div>
    );
}

export default CalcHead;