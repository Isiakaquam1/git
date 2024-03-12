const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
   
}
function clearDisplay() {
    // const display = document.getElementById("display");
    display.value = "";
}
function calculate() {
    display.value = eval(display.value);

}