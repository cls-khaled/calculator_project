// UI Elements 
const
    //result monitor
    monitorValue = document.getElementById('monitor-value'),
    monitorOperator = document.getElementById('monitor-operator'),
    // operators buttons 
    dividedOperator = document.getElementById('btn-divide'),
    multiplyOperator = document.getElementById('btn-multiply'),
    subtractOperator = document.getElementById('btn-subtract'),
    equalOperator = document.getElementById('btn-equal'),
    addOperator = document.getElementById('btn-add'),
    //clear button
    allClear = document.getElementById('ac-btn'),
    clearEntry = document.getElementById('ce-btn'),
    //number buttons
    button0 = document.getElementById('btn-0'),
    button1 = document.getElementById('btn-1'),
    button2 = document.getElementById('btn-2'),
    button3 = document.getElementById('btn-3'),
    button4 = document.getElementById('btn-4'),
    button5 = document.getElementById('btn-5'),
    button6 = document.getElementById('btn-6'),
    button7 = document.getElementById('btn-7'),
    button8 = document.getElementById('btn-8'),
    button9 = document.getElementById('btn-9'),
    //dot button 
    buttonDot = document.getElementById('btn-dot');


/* ################################ */
/* ##### WRITE YOUR CODE HERE #####*/
/* ################################ */



// element existance test; 
console.debug(
`Elements Variable Test: 
variable 'monitor value' ${monitorValue ? '[Pass]' : '[Fail]'}
variable 'monitor operator' ${monitorOperator ? '[Pass]' : '[Fail]'}
variable 'dividedOperator' ${dividedOperator ? '[Pass]' : '[Fail]'} 
variable 'multiplyOperator' ${multiplyOperator ? '[Pass]' : '[Fail]'} 
variable 'subtractOperator' ${subtractOperator ? '[Pass]' : '[Fail]'} 
variable 'equalOperator' ${equalOperator ? '[Pass]' : '[Fail]'} 
variable 'addOperator' ${addOperator ? '[Pass]' : '[Fail]'} 
variable 'allClear' ${allClear ? '[Pass]' : '[Fail]'} 
variable 'clearEntry' ${clearEntry ? '[Pass]' : '[Fail]'} 
variable 'button1' ${button1 ? '[Pass]' : '[Fail]'} 
variable 'button2' ${button2 ? '[Pass]' : '[Fail]'} 
variable 'button3' ${button3 ? '[Pass]' : '[Fail]'} 
variable 'button4' ${button4 ? '[Pass]' : '[Fail]'} 
variable 'button5' ${button5 ? '[Pass]' : '[Fail]'} 
variable 'button6' ${button6 ? '[Pass]' : '[Fail]'} 
variable 'button7' ${button7 ? '[Pass]' : '[Fail]'} 
variable 'button8' ${button8 ? '[Pass]' : '[Fail]'} 
variable 'button9' ${button9 ? '[Pass]' : '[Fail]'} 
variable 'buttonDot' ${buttonDot ? '[Pass]' : '[Fail]'} 
`);