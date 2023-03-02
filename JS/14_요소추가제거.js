
//추가 버튼 클릭 시 동작
document.getElementById("add").addEventListener("click", function(){
      
    //div 요소 생성
    const div =  document.createElement("div");
    //<div></div>

    //<div>에 row class 추가
    div.classList.add("row"); //<div class="row"></div>
    //------------------------------------------------

    //input 요소 생성
    const input = document.createElement("input");
    //input class 추가
    input.classList.add("in"); //<input class = "in" />

    // 요소에 속성을 추가하거나 변경할 때 사용하는 함수 
    // 요소.setAttribute("속성명", "속성값")
    // <-> 요소.removeAttribute("속성명") : 속성 제거
    // input 기본값은 text이기 때문에 number로 변경해야한다

    //input에 type="number" 추가
    input.setAttribute("type", "numbert"); //<input type="number" class="in" />

    //------------------------------------------------

    //동적으로 span을 생성해야하기 때문에 html에 적는 것이 아니라 js에 적어 
    //동적으로 생길 수 있도록 한다!

    //여기 아래는 remove가 생겨나는것!
    //span 요소 생성
    const span = document.createElement("span"); //<span></span>
    //span에 remove class 추가
    span.classList.add("remove"); //<span class="remove"></</span>

    //span에 &times; 추가
    span.innerHTML = "&times;";//<span class="remove">&times;</</span>

    //---- 여기아래는 remove가 없어지는것!

    //span에 click 이벤트 동작 추가(동적 요소에 동적으로 이벤트 추가!)
    //클릭 이벤트 여기서!!!!!!
    span.addEventListener("click", function(){
        // alert("동적이벤트 추가!")

        //클릭된 x버튼의 부모 요소(div.row 자체를 다 없애야함)를 삭제
        //요소.remove() : 해당 요소를 제거
        this.parentElement.remove();
    })

    //-----------------------------------------------
    // div > input, span 넣고 조립
    div.append(input, span);


    //.container에 div를 마지막 자식으로 추가
    //최종 조립된 div를 append해줌
    document.querySelector(".container").append(div);

    //마지막 추가되는 input에 포커스!
    input.focus();

})

//계산 버튼이 클릭 되었을 때 
// input 요소에 작성된 값을 모두 얻어와 합한 후 출력
document.getElementById("calc").addEventListener("click", function(){
    //함수는 호출된 시점에 html 화면을 기반으로해서 해석 진행!!
    const inputList = document.getElementsByClassName("in");

    let sum = 0;

    for(let input of inputList){
        sum += Number(input.value); //input 요소에 작성된 값 누적
        // 요소에서 읽어온 값 또는 내용은 무조건 String
        // -> 데이터 형변환 필요
        //input.value가 string으로 넘어오기 때문에 number로 변경
    }

    alert("합계: " + sum);
})