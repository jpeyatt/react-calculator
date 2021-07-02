import './CalcBody.css';
import CalcButton from './CalcButton';
import { BUTTONS, OPERATIONS, NUMBERS } from '../../constants';

function CalcBody({onOpClick, onNumClick, onCalcClick, onDelClick, onClearClick, activeOpBtn}) {
    const onBtnClick = (event) => {
        const val = event.nativeEvent.target.value;
        if (OPERATIONS[val]) onOpClick(val);
        else if (NUMBERS[val]) onNumClick(val);
        else if(val === '=') onCalcClick();
        else if (val === 'DEL') onDelClick();
        else if (val === 'C') onClearClick();
    }
    let btnClasses;
    return (
        <div id="calc-body">
            {
                [...BUTTONS].map((button, i) => {
                    btnClasses = [...button.classes];
                    if (activeOpBtn === button.value) btnClasses.push('active-op-btn');
                    return <CalcButton
                        key={button.id}
                        id={button.id}
                        classes={btnClasses} 
                        value={button.value}
                        displayText={button.displayText}
                        onClickFn={onBtnClick}
                    />
                })
            }
        </div>
    );
}

export default CalcBody;