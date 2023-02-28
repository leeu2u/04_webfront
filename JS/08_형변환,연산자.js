//형변환 확인

//방법 1 :
const btn1 = document.querySelector(".btn1")
// 방법 2 : 배열로 넘어오기 때문에 
// const btn1 = document.getElementByClassNames("btn1")[0];

btn1.addEventListener("click", function(){
    console.log("parseInt('123') : " + parseInt('123'));
    console.log("paraeInt('3.14') : " + parseInt('3.14'));
    console.log("-----------------------------------");

    console.log("parseFloat('123') : + parseFloat('123')");
    console.log("parseFloat('3.14') : + parseFloat('3.14')");
    console.log("-----------------------------------");

    console.log("Number('123') : " + Number('123'));
    console.log("Number('3.14') : " + Number('3.14'));
    console.log("-----------------------------------");
    
})

//isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function(){

    if(isNaN(input2.value)){
        alert("숫자가 아닙니다");
    }else{
        alert("숫자입니다");
    }
})

//Math확인
const input3 = document.getElementById("input3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click",function(){
    console.log(Math.ceil(input3.value));
    console.log(Math.floor(input3.value));
    console.log(Math.trunc(input3.value));
    console.log(Math.round(input3.value));
})

//Math.random()
document.getElementById("btn4").addEventListener("click", function(){

    //rgb 색상 랜덤 대입기능 (0~255)
    const r = Math.floor(Math.random() * 256) //랜덤한 숫자가 0<= ran < 256
    const g = Math.floor(Math.random() * 256) //랜덤한 숫자가 0<= ran < 256
    const b = Math.floor(Math.random() * 256) //랜덤한 숫자가 0<= ran < 256

    document.querySelector("body").style.backgroundColor
    = "rgb(" + r + "," + g + "," + b + ")"
})


