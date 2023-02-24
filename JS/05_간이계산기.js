
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function plus(){
    //input안에 있는 값은 string으로 넘어오기 때문에
    //number로 형변환해야함
    result.innerText = Numver(num1.value) + Number(num2.value)
}
function minus(){
    result.innerText = Numver(num1.value) - Number(num2.value)
}

function multi(){
    result.innerText = Numver(num1.value) * Number(num2.value)
}

function div(){
    result.innerText = Numver(num1.value) / Number(num2.value)
}

function mod(){
    result.innerText = Numver(num1.value) % Number(num2.value)
}
