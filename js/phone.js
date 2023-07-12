document.getElementById('btn-phone-plus').addEventListener("click" , function(){
    const newPhoneNumber = phoneUpdated(true);
    phoneTotalPrice(newPhoneNumber);
    subTotalElement();
})

document.getElementById('btn-phone-minus').addEventListener("click" , function(){
    const newPhoneNumber = phoneUpdated(false);
    phoneTotalPrice(newPhoneNumber);
    subTotalElement();
})