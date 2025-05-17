/* ##### Global Constants #####*/
const
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'x',
    DIVIDE = '÷',
    EQUAL = '=',
    //
    MAX_MONITOR_LENGTH = 13;

/* ##### Variables#####*/
const
    //result monitor
    monitorValue = document.getElementById('monitor-value'),
    monitorOperator = document.getElementById('monitor-operator'),
    //clear button
    allClear = document.getElementById('ac-btn'),
    clearEntry = document.getElementById('ce-btn');
let
    // calculation values
    isRealNumber = false;
operator = null,
    lastNumber = null,
    currentNumber = 0,
    numberAsString = "";

/* ##### Core #####*/
function calculate(operator, lastValue, currentValue) {
    switch (operator) {
        case ADD:
            return lastValue + currentValue
        case SUBTRACT:
            return lastValue - currentValue
        case MULTIPLY:
            return lastValue * currentValue
        case DIVIDE:
            return lastValue / currentValue
    }
}
function isLimitExceeded(value) {
    return value.length > MAX_MONITOR_LENGTH;
}
/* ##### Events #####*/
//-------- operations buttons event
let operationButtons = [
    document.getElementById('btn-divide'),
    document.getElementById('btn-multiply'),
    document.getElementById('btn-subtract'),
    document.getElementById('btn-equal'),
    document.getElementById('btn-add'),
]
for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', () => handleOperationButtonClick(operationButton));
}
//-------- digit buttons event
let digitButtons = [
    document.getElementById('btn-0'),
    document.getElementById('btn-1'),
    document.getElementById('btn-2'),
    document.getElementById('btn-3'),
    document.getElementById('btn-4'),
    document.getElementById('btn-5'),
    document.getElementById('btn-6'),
    document.getElementById('btn-7'),
    document.getElementById('btn-8'),
    document.getElementById('btn-9'),
    document.getElementById('btn-dot')
]
for (let digitButton of digitButtons) {
    digitButton.addEventListener('click', () => handleDigitButtonClick(digitButton));
}
clearEntry.addEventListener('click', handleClearEntryClick);
allClear.addEventListener('click', handleAllClearClick)
//--------

/* ##### Event Handler #####*/
function handleOperationButtonClick(operationButton) {
    operator = operationButton.innerText != EQUAL ? operationButton.innerText : operator ;
    monitorOperator.innerText = operator != EQUAL ? operator : "";
    //
    if (lastNumber && operator) {
        let calcResult = calculate(operator, lastNumber, currentNumber);
        lastNumber = calcResult;
        monitorValue.innerText = lastNumber;
    } else {
        lastNumber = currentNumber;
    }
    //for next operation 
    if(operationButton.innerText == EQUAL) monitorOperator.innerText = ""; 
    numberAsString = "";
    isRealNumber=false;
    //
    displayCalculatorState();
}

function handleDigitButtonClick(digitButton) {
    let digit = digitButton.innerText;
    //prevent multiple dots in number 
    if (digit == '.') {
        if (!isRealNumber) {
            numberAsString += digit;
            isRealNumber = true;
        }
    } else {
        numberAsString += digit;
    }

    if (!isLimitExceeded(numberAsString)) {
        currentNumber = parseFloat(numberAsString);
        monitorValue.innerText = numberAsString;
    }
    displayCalculatorState();
}

function handleClearEntryClick() {
    currentNumber = 0;
    numberAsString = "";
    monitorValue.innerText = "";
}

function handleAllClearClick() {
    monitorValue.innerText = "";
    monitorOperator.innerHTML = "";
    currentNumber = 0;
    lastNumber = null;
    operator = null;
    numberAsString = "";
}

/* ##### Testing #####*/
function displayCalculatorState() {
    console.log(
        '\n| operator : ', operator,
        '\n| last number : ', lastNumber,
        '\n| current number : ', currentNumber,
        '\n| monitor value : ', monitorValue.innerText,
        '\n| monitor operator : ', monitorOperator.innerText,
        '\n| result : ', calculate(operator, lastNumber, currentNumber)

    );
}



