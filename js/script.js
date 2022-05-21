let ageInput = document.querySelector("#ageInput");
let ageBtn = document.querySelector("#ageBtn");
let elegibleText = document.querySelector("#elegible");
let age;

ageInput.focus();
ageBtn.addEventListener("click", function(){
    age = ageInput.value;
    if (age < 100) {
        elegibleText.textContent = `Your age is ${age}. You are not elegible.`;
    } else if (age == 100) {
        elegibleText.textContent = `Your age is ${age}. Here is your birthday card from the King!`;
    } else {
        elegibleText.textContent = `Your age is ${age}. You are not elegible, you have already gotten one`;
    };
});