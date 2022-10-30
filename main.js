// const button = document.getElementsByClassName('button');
const result = document.getElementById("result");
// const bCalculation = document.getElementsByClassName('buttonCalculation');
// const reset = document.getElementsByClassName('buttonReset');
// const equal = document.getElementsByClassName('buttonEqual');
const buttonZero = document.getElementsByClassName('buttonZero');



let concatText = "";
function clickbutton(target){
  let target_value = target.innerHTML;
  if(target_value == "AC") {
    concatText = "";
    result.innerHTML = "0";
  } else if(target_value == "=") {
    result.innerHTML = eval(result.innerHTML);
    concatText = result.innerHTML;
  } else {
    concatText += target_value;
    result.innerHTML = concatText;
  } 
  
}

function calculation(elem){
  
  if(result.textContent.slice(-1) === '+'){
    const f = result.textContent.slice(0,-1);
    result.textContent = f + elem.textContent;
  } else if(result.textContent.slice(-1) === '-'){
    const f = result.textContent.slice(0,-1);
    result.textContent = f + elem.textContent;
  } else if(result.textContent.slice(-1) === '*'){
    const f = result.textContent.slice(0,-1);
    result.textContent = f + elem.textContent;
  } else if(result.textContent.slice(-1) === '/'){
    const f = result.textContent.slice(0,-1);
    result.textContent = f + elem.textContent;
  } else {
    concatText += elem.textContent;
    result.innerHTML = concatText;
  }
}

function zero(target){
  if(result.textContent.slice(0,1) === "0"){
    const f = result.textContent.slice(1);
    result.textContent = f + target.textContent;
  } else if(result.textContent.slice(0,2) === "00"){
    const f = result.textContent.slice(2);
    result.textContent = f + target.textContent;
  } else if(result.textContent.slice(-1) === "."){
    const f = result.textContent.slice(0,-1);
    result.textContent = f + target.textContent;
  } else{
    concatText += target.textContent;
    result.innerHTML = concatText;
  }
}
