"use strict";
//Variables I will be using 
window.onload = function init() {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = TotalCostBtnOnClick;
};




function TotalCostBtnOnClick() {
    const pickupTextbox = document.getElementById("pickupTextbox");
    let number1 = Number(pickupTextbox.value);

    const numDaysTextbox = document.getElementById("numDaysTextbox").value;
    let number2 = Number(numDaysTextbox);

   
    let optionPrice = 0;

    if (document.getElementById("eTollCheckbox").checked) {

        optionPrice += 3.95;
        
    }

    if (document.getElementById("gpsCheckbox").checked) {

        optionPrice += 2.95;
        
    }
    if (document.getElementById("roadSideCheckbox").checked) { 

        optionPrice += 2.95;
        
    }

    let ageSurcharge = 0;
    let radioBtn = document.getElementById("yesAgeRadiobox");
    if (radioBtn.checked) {
       ageSurcharge = 0.30; 

    } else {
        ageSurcharge = 0;
    }

    //Calculations 
    let carRentalPrice = 29.99 * number2;
    let option = optionPrice * number2;
    let surchargeAmount = ageSurcharge * (carRentalPrice * option);
    let totalCost = 0 ;
    totalCost=(option + carRentalPrice) * (1 + ageSurcharge );




    // we about to call the output answers
    let carRentalAnswer = document.getElementById("carRentalPriceAnswer");
    let optionpriceAnswer = document.getElementById("optionPriceAnswer");
    let ageSurchargeAnswer = document.getElementById("ageSurchargeAnswer");
    let answerTotalDue = document.getElementById("answerTotalDue");

    carRentalAnswer.innerHTML = totalCost;
    optionpriceAnswer.innerHTML = option;
    ageSurchargeAnswer.innerHTML = surchargeAmount;
    answerTotalDue.innerHTML = optionPrice;

}



