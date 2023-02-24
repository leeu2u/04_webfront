
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calc(btn){
    //btn 매개변수
    const op = btn.innerText; //-> + - * / % 
    
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    // new Function()
    //-> eval("코드 형식의 문자열") 매개변수의 문자열을 JS 코드로 해석/수행 함수
    // 그러나 eval는 속도가 느리고 보안 이슈가 있어서 사용하지 않음

    //"return(띄어쓰기)" 해야함!

    result.innerText = new Function("return " + n1 + op + n2)();
}
