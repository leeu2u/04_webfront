// 배열 확인
document.getElementById("btn1").addEventListener("click",function(){
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과', '딸기', '바나나'];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    //배열에 존재하지 않는 인덱스에 값 대입
    //-> 자동으로 추가되면서 길이 증가
    arr1[0] = '뽀로로';
    arr1[1] = 5000;
    arr1[2] = true;
    // 중간인덱스 건너뛰면, 건너뛴 부분은 empth로 남음
    arr1[5] = 111; // 추가 가능
    console.log(arr1);
    // 값: (6)['뽀로로', 5000, true, empty × 2, 111]

    //-------------------------------------------------------

    //for문으로 배열 요소 반복 접근하기

    //1. 일반 for문 - 배열, 컬렉션 
    // for(let i = 0; i < arr4.length; 1++){
    //     console.log(arr4[i]);
    // }

    //****2. 배열.forEach(function(item, index){반복수행될 코드}) - 배열에서만 사용 가능
    // - item : 현재 접근중인 요소
    // - index : 현재 인덱스

    //*여러 요소를 얻어온 경우(***HTMLCollection, NodeList)는
    // 배열이 아니므로 forEach()문 사용 불가!
    // arr4.forEach(function(a, i){
    //     console.log(i + " : " + a);
    // })

    //3. for(item of 배열(또는 컬렉션)){} - 배열, 컬렉션
    // == Java 향상된 for문과 비슷함
    // (Symbol.iterator가 존재하는 객체에 사용 가능)
    for(let item of arr4){
        console.log(item);
    }

    //li 태그에 작성된 값 얻어와서 합 구하기
    // const list = document.getElementsByTagName("li");
    const list = document.querySelectorAll("#test > li")
    // console.log(list)

    let sum = 0;
    for(let item of list){
        sum += Number(item.innerText);
        // 문자열 -> 숫자

    }
    console.log("sum : " + sum);

    //4. for(let key in 객체) -JS 객체용 for문
    // for of 배열에서 for in 객체에서 사용

})

//배열 관련 함수 확인
document.getElementById("btn2").addEventListener("click", function(){
    // 비어있는 배열 생성
    const arr = []; // == new Array();

    // 비어있는 배열에 요소를 계속해서 추가
    // 배열.push(값) : 배열 마지막 요소로 전달한 값이 추가된다.
    arr.push("초밥");
    arr.push("냉면");
    arr.push("삼겹살");
    arr.push("쌀국수");

    //배열.toString() : 배열 요소 사이에 ","추가한 문자열로 반환
    console.log(arr.toString());

    //배열.pop() : 배열의 마지막 요소를 꺼내와 반환
    const temp = arr.pop();
    console.log("arr : " + arr.toString());
    console.log("temp : " + temp);

    //배열.indexOf("값")
    console.log("초밥 인덱스: " + arr.indexOf('초밥'));
    //arr에 '갈비'가 있으면 true, 없으면 false (fasle의 값이 -1)
    console.log('갈비가 arr에 있는가? : ' + (arr.indexOf('갈비') != -1));

    //배열.sort() -> ['냉면', '삼겹살', '초밥']
    console.log(arr.sort())

    //숫자 정렬의 문제점과 해결방법(-> 정렬기준 함수를 꼭 전달해줘야함!)
    const numArr = [5,3,2,10,1]; 
    console.log(numArr.sort()) //->[1, 10, 2, 3, 5]
    

    //정렬 기준 함수 function(a,b){return a-b;} -> 오름차순
    //자료구조->정렬알고리즘
    //ex 버블정렬, 삽입정렬, 선택정렬 
    // 내림차순 function(a,b){return b-a;}
    console.log(numArr.sort(function(a,b){return a - b;})); //-> [1, 2, 3, 5, 10]

    //원본불변의 법칙
    //reate는 원본을 변하게 하면 안된다라는 함수가 존재
    //.sort함수는 mutate로 원본을 훼손시키는 함수 
    //*sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생(원본훼손 원하지 않으면 깊은 복사 사용해서 해결 가능 = 똑같은거 하나 더 복사해서 써라~~)


    console.log(numArr); //->[1, 2, 3, 5, 10] *원본이 변함

    //배열.join("구분자")
    console.log(numArr.join("//"));
    //-> //를 기준으로 문자열로 숫자가 들어감 

})

document.getElementById("btn3").addEventListener("click",function(){

    const num1 = [];

    //배열요소가 6개 미만이면 반복해라 
    while(num1.length <6){
        //1~45 난수
        const ran = Math.floor(Math.random()*45+1);
        // let num2 = parseInt(Math.random()*45) + 1;

        //중복검사
        //배열에 난수값이 없으면
        if(num1.indexOf(ran) == -1){
            num1.push(ran);
        }
    }
    
    num1.sort(function(a,b){return a - b;}) //오름차순 정렬
    console.log('로또번호 : ' + num1);

   
})