
let screenEL = document.getElementById("screen");
let screenValue = "";

function press(num) {
    screenValue += num;
    screenEL.value = screenValue;
}
function back() {
    let a = screenValue;
    let b = a.slice(0, -1);
    screenValue = b;
    screenEL.value = b;


}
function clearscreen() {

    screenValue = "";
    screenEL.value = screenValue;
}


function equal() {
    let a = screenEL.value;
    let b = eval(a);
    screenEL.value = b;
    screenValue = b;
}




