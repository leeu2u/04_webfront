/*innerHTML로 읽어오기(요소 내부 
내용(태그, 속성, 내용 다 읽어옴)을 얻어와 문자열로 반환)*/

function getInnerHTML1(){
    //HTML 문서 내에서 id 속성값이 "test1"인 요소를 얻어오기
    //상수형 변수 t1에 저장
    const t1 = document.getElementById("test1");

    //브라우저 콘솔에 출력
    console.log(t1.innerHTML);
}


//innerHTML로 변경하기(태그, 속성이 해석된다. HTML요소로..(HTML Converter))
function setInnerHTML1(){
    const t1 = document.getElementById("test1");

    //"" 안에 적힌 내용이 해석되서 화면에 출력된다.  
    t1.innerHTML = "<b class='red'> 변경된 <br><br> 내용입니다.";
}

//innerHTML응용
function add(){

    //1) id 속성값이 "area1"인 요소를 얻어와 변수에 저장
    const area1 = document.getElementById("area1");

    //2) area1 요소의 이전 내용에 새로운 내용을 누적
    //- += 을 사용해서 계속해서 누적되도록!
    area1.innerHTML += "<div class='area1-box'></div>";
}

//위에서는 함수안에 const를 계속 선언했지만!
//const를 먼저 선언하여 함수 안에서 갖고와 사용할 수 있다!
const t2 = document.getElementById("test2");

//innerText로 읽어오기(내용만 읽어옴)
function getInnerText1(){
    console.log(t2.innerText);
}

//innerText로 변경하기
function setInnerText1(){
    t2.innerText ="<b class='red'> 변경된 <br><br> 내용입니다.";
}

//confirm
function fnConfirm(){
    confirm("정말 삭제하시겠습니까?")
}

//confirm
function fnConfirm(){
    if(confirm("배경색을 분홍색으로 바꿀래?")){
        document.getElementById("confirmTest").style.backgroundColor ="pink";
    } else {
        console.log("취소함")
    }
}

//prompt("내용")
function fnPrompt(){
    const input = prompt("변경할 버튼명 입력하세요");
    // const 변수임    
    // 입력한 값 or null이 input에 저장됨

    if(input != null){
        document.getElementById("promptTest").innerText=input;
    }else{
        alert("취소되었습니다.")
    }

}