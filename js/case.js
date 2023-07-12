document.getElementById('btn-case-plus').addEventListener("click" , function(){
    const newCaseNumber = getInputValueById(true);
    getElementById(newCaseNumber);
    subTotalElement();
})

document.getElementById('btn-case-minus').addEventListener("click" , function(){
    const newCaseNumber = getInputValueById(false);
    getElementById(newCaseNumber);
    subTotalElement();
})