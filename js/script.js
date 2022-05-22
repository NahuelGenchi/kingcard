let ageInput = document.querySelector("#ageInput");
let ageBtn = document.querySelector("#ageBtn");
let ageText = document.querySelector("#ageText");
let elegibleText = document.querySelector("#elegible");
let age;

ageInput.focus();
ageBtn.addEventListener("click", function(){
    age = ageInput.value;
    ageText.textContent = `Your age is ${age}`;
    if (age < 100) {
        elegibleText.textContent = `You are not elegible.`;
    } else if (age == 100) {
        elegibleText.textContent = `Here is your birthday card from the King!`;
    } else {
        elegibleText.textContent = `You are not elegible, you have already gotten one`;
    };
    ageInput.value = "";
});