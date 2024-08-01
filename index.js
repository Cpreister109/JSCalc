const display = document.getElementById("display");
//change display
function appendToDisplay(input){
    display.value += input;
}
//clear function
function clearDisplay() {
    display.value = "";
}
// does the math
function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}