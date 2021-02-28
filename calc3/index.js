function sin(){
    document.calculator.result.value = Math.sin(calculator.result.value)
}

function cos(){
    document.calculator.result.value = Math.cos(calculator.result.value)
}

function tan(){
    document.calculator.result.value = Math.tan(calculator.result.value)
}
function rev(){
    document.calculator.result.value = ""
}

function power2(){
    document.calculator.result.value = Math.pow(calculator.result.value,2)
}

function power3(){
    document.calculator.result.value = Math.pow(calculator.result.value,3)
}
function radic(){
    document.calculator.result.value = Math.pow(calculator.result.value,1/2)
}
function radic2(){
    document.calculator.result.value = Math.pow(calculator.result.value,1/3)
}

function number(value){
    document.calculator.result.value += value
}

function oprator(value){
    document.calculator.result.value += value
}
function backspace(value){
   let a = document.calculator.result.value;
   document.calculator.result.value = a.substr(0, a.length - 1)
}


function equal(){
    let result = document.calculator.result.value;
   if(result == ""){
    document.calculator.result.value = "error"
    }else {
    document.calculator.result.value = eval(calculator.result.value);
    }
}