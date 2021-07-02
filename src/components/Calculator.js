import { useState } from 'react';
import './Calculator.css';
import CalcBody from './body/CalcBody';
import CalcHead from './head/CalcHead';
import { OPERATIONS } from '../constants';


function Calculator() {
    
    const [operator, setOperator] = useState(null);
    const [runningNum, setRunningNum] = useState('');
    const [currNum, setCurrNum] = useState('');
    const [opLastClick, setOpLastClick] = useState(false);

    const operationClick = (value) => {
        if (operator !== value) {
            console.log({operator, value})
            setOperator(value);
            setOpLastClick(true);
            if (runningNum.length && currNum.length) {
                calculate();
            } else if (!runningNum.length && currNum.length) {
                setRunningNum(currNum);
            }
        }
    }
    const numberClick = (value) => {
        if (opLastClick) {
            setCurrNum(value);
            setOpLastClick(false);
        } else {
            setCurrNum(currNum + value);
        }
    }
    const clearClick = () => {
        setRunningNum('');
        setCurrNum('');
        setOperator(null);
    }
    const deleteClick = () => {
        if (currNum.length) {
            setCurrNum(currNum.slice(0, -1));
        }
    }
    const calculate = () => {
        setRunningNum(OPERATIONS[operator](+runningNum, +currNum));
        setCurrNum('');
    }

    return (
        <div id="main-wrapper">
            <div id="calc-wrapper">
                <CalcHead 
                    inputVal={currNum}
                    resultVal={runningNum}
                />
                <CalcBody
                    onOpClick={operationClick}
                    onNumClick={numberClick}
                    onCalcClick={calculate}
                    onDelClick={deleteClick}
                    onClearClick={clearClick}
                    activeOpBtn={operator}
                />
            </div>
        </div>
    );
}

export default Calculator;