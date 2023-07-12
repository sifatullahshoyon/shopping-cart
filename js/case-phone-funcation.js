function getInputValueById(isIncreasing){
    const caseInput = document.getElementById('case-input-field');
    const caseInputStr = caseInput.value;
    const priveousCaseNumber = parseInt(caseInputStr);
    let newCaseNumber;
    if(isIncreasing === true){
        newCaseNumber = priveousCaseNumber + 1;
    }
    else{
         newCaseNumber = priveousCaseNumber - 1;
    }
    caseInput.value = newCaseNumber;
    return newCaseNumber;
}

function getElementById(newCaseNumber){
    const newCaseTotalAmount = newCaseNumber * 59;
    // const caseTotal = document.getElementById('case-total');
    // caseTotal.innerText = newCaseTotalAmount;
    setInnerText('case-total' , newCaseTotalAmount);
}

function phoneUpdated(isIncreasing){
    const phoneInput = document.getElementById('phone-input-field');
    const phoneInputStr = phoneInput.value;
    const priveousPhoneNumber = parseInt(phoneInputStr);
    let newPhoneNumber;
    if(isIncreasing === true){
        newPhoneNumber = priveousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = priveousPhoneNumber - 1;
    }
    phoneInput.value = newPhoneNumber;
    return newPhoneNumber;
}

function phoneTotalPrice(newPhoneNumber){
    const newPhoneTotalAmount = newPhoneNumber * 1219;
    setInnerText('phone-total' , newPhoneTotalAmount);
}

function caseDitels(){
    const caseTotal = document.getElementById('case-total');
    const caseTotalStr = caseTotal.innerText;
    const caseTotalElement = parseInt(caseTotalStr);
    return caseTotalElement;
}

function phone(){
    const phoneTotal = document.getElementById('phone-total');
    const phoneTotalStr = phoneTotal.innerText;
    const caseTotalElement = parseInt(phoneTotalStr);
    return caseTotalElement;
}

// set inner text function add:-
function setInnerText(elementId , value){
    const caseTotal = document.getElementById(elementId);
    caseTotal.innerText = value;
}

// calculate sub-total:
function subTotalElement(){
    const caseTotal = caseDitels('case-total');
    const phoneTotal = phone('phone-total');
    const sum = caseTotal + phoneTotal;
    setInnerText('sub-total' , sum)

    // tax Amount : 
    const taxAmountStr = (sum * 0.1).toFixed(3);
    const taxAmountNumber = parseInt(taxAmountStr);
    setInnerText('tax-amount' , taxAmountNumber);

    // Total Amount:-
    const totalAmount = sum + taxAmountNumber;
    const totalAmountStr = parseInt(totalAmount);
    setInnerText('final-total' , totalAmountStr);
}

