//즉시 실행 함수 확인하기
//-> 정의할 때 바로 호출하기 때문에 바로 실행됨
// 페이지로딩 시 바로 수행됨

(function(){
    const str = "저메추";
    console.log(str);
})();
(function(){
    //변수명 중복되어도 상관없음
    // 지역변수로 생각하기 때문에!
    const str = "아무값";
    console.log(str);
})();

//-------------------------------
// 화살표 함수(arrow function)

//1. 기본형태 : ([매개변수]) => {}
document.getElementById("btn1").addEventListener("click", () => {
    alert("화살표 함수 기본 형태 입니다!")
});

//즉시 실행 함수 + 화살표 함수
(() => {
    console.log("즉시 실행 함수 + 화살표 함수");
})();

// 2. 매개변수 1개 : 매개변수 => {}
document.getElementById("btn2").addEventListener("click", e=> {

    //매개변수 e(또는 event) : 이벤트 관련 정보를 모두 갖고 있는 객체 
    // console.log(e);

    //e.target : event가 발생한 대상(요소)
    // console.log(e.target)

    e.target.style.backgroundColor = 'yellow';

    // ******************화살표 함수 주의사항 ***********************
    // -> 화살표 함수를 이벤트 핸들러로 사용할 경우
    // this는 window 객체를 나타내게 된다.(화살표 함수 내부에 this 사용 불가)
    //-> e.target으로 대체
})

//3.{}, return 생략 : () => 값 또는 식
function print(fn) { //fn : 전달받은 함수
    console.log(fn(2));
}

document.getElementById("btn3").addEventListener("click", () => {
    //익명 함수
    print(function(num){return num * 10})

    //화살표 함수
    print(num => num * 10);
})