import './CalcButton.css';

function CalcButton({id, classes, value, displayText, onClickFn}) {

    return (
        <button
            id={id}
            onClick={onClickFn}
            style={{gridArea: id}}
            value={value}
            className={['btn', id].concat(classes).join(' ')}>
            {displayText}
        </button>
    );
}

export default CalcButton;