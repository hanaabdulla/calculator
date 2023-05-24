
let screenEL = document.getElementById("screen");
let screenValue = "";

function press(num){
    screenValue += num;
    screenEL.value = screenValue;
}
function clearscreen(){
 
  screenValue="";
    screenEL.value = screenValue;
}
function equal(){
    let a = screenEL.value;
    let b = eval(a);
    screenEL.value = b;
    screenValue = b;
}
   

   

