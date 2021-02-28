const btn1 = document.getElementById("btn1")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
let oprator = document.getElementById("oprator")
const result = document.getElementById("result")

btn1.onclick = ()=>{
    let input1_value = Number(input1.value);
    let input2_value = Number(input2.value);
    let oprator_value = oprator.value

    if(oprator_value === "+"){
        result.innerText = input1_value + input2_value;
    }else if(oprator_value === "-"){
        result.innerText = input1_value - input2_value;
    }else  if(oprator_value === "*"){
        result.innerText = input1_value * input2_value;
    }
}