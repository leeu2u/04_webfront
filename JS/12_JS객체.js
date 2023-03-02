//객체 생성 1
document.getElementById("btn1").addEventListener("click", function(){

    //{} 객체 생성 및 다루기

    // **중요
    // JS 객체의 key는 무조건 string(묵시적으로도 string)
    // -> key 작성 시 "", '' (따옴표 x) 모두 string으로 인식

    const brand = "스타벅스";

    const product = {
        "pName" : "텀블러", 
        'brand' : "투썸플레이스",
         color : ["red", "black", "silver"],
         price : 30000,
         'information' : function(){
            //product 객체의 기능
            const brand = "메가커피"; //-> 스타벅스에서 메가커피로 변경됨
            console.log(brand);
        

            //객체 내부 함수에서 변수명을 작성하면
            // 해당 객체의 변수(key)가 아닌
            // 전역변수가 선택된다.
            //왜? 같은 객체의 변수(key)를 선택하는 방법이 별도로 존재한다.

            // ** 객체 내부에서 this == 현재 객체 **
            console.log(this.pName);
            console.log(this.brand);
            console.log(this.color);
            console.log(this.price);
         }
    };

    console.log(product)

    //객체 기능 호출하기
    product.information();

    //객체가 가지고 있는 값 출력하기
    const div1 = document.getElementById("div1");
    div1.innerHTML = "";
    //객체의 값을 얻어오거나 대입하는 방법
    // 1) 얻어오기 : 객체명.key
    //              객체명['key']

    // 2) 대입하기 : 객체명.key = 값;
    //              객체명['key'] = 값;

    div1.innerHTML += "product.pName: " + product.pName + "<br>";
    div1.innerHTML += "product.brand: " + product.brand + "<br>";
    div1.innerHTML += "product.color: " + product.color + "<br>";
    div1.innerHTML += "product.price: " + product.price + "<br>";
    div1.innerHTML += "<hr>";

    /*product.pName: 텀블러
        product.brand: 투썸플레이스
        product.color: red,black,silver
        product.price: 30000 */

    //product.price 값 변경
    product.price = 25000;
    div1.innerHTML += "product.price : " + product.price + "<br>";
    div1.innerHTML += "<hr>";
    // 3000 -> 25000


    //JS 객체에 없는 key에 값 대입하기
    //-> 객체에 추가된다/
    product.capacity = "550ml";
    console.log(product);
    div1.innerHTML += "product.capacity : " + product.capacity + "<br>";
    div1.innerHTML += "<hr>";

    //객체의 key 제거 방법
    //-> delete 객체변수명.key

    // delete product.color;
    // console.log(product);

    //객체명['key'] 방법으로 
    // 객체가 가지고 있는 모든 값 출력하기
    // -> for in 구문(객체 전용 for문)
    div1.innerHTML += "product['capacity'] : " + product['capacity'] + "<br>";
    div1.innerHTML += "<hr>";

    //for(let key in 객체명) : 매 바퀴마다 객체의 K를 하나씩 얻어와 key 변수에 저장
    for(let key in product){

        //객체의 K는 모두 string == 'pNmae', 'price'
        div1.innerHTML += product[key] + "<br>"
    }

})

//생성자 함수
document.getElementById("btn2").addEventListener("click", function(){
    const div2 = document.getElementById("div2");

    const stdList = []; //비어있는 배열 생성

    //2. 생성자 함수 호출 : new 생성자함수명(매개변수)
    stdList.push(new Student(1, 2, "홍길동"));
    stdList.push(new Student(3, 4, "김길동"));
    stdList.push(new Student(4, 2, "나길동"));
    stdList.push(new Student(2, 8, "다길동"));

    div2.innerHTML = ""; //이전 html 삭제

    //for of : 배열/컬렉션 요소 반복접근용 for문

    for(let std of stdList){
        console.log('std : ' + std)
        //for in : 객체의 키 반복 접근용 for문
        for(let key in std){
            console.log('key : ' + key)
            //std[key]의 자료형이 함수라면~ 실행해라! 'function'이면 실행 후 출력해라!
            if(typeof std[key] == 'function'){
                div2.innerHTML += key + " : " + std[key]() + "<br>"//실행해라! 
            }else {
                div2.innerHTML += key + " : " + std[key] + "<br>"//그냥 데이터
            }
        }

        div2.innerHTML += "<hr>";
    }

});

//1. 생성자 함수 정의 : 생성자 함수의 시작은 반드시 대문자!! 
function Student(grade, ban, name) {
    // JS 함수의 매개변수는 let, const, var를 적지 않음! 
    // -> 안적어도 해당 함수의 지역 변수로 취급함

    // 생성자 함수에서 this
    // == new 연산자를 통해서 만들어지는 객체(앞으로 만들어질 객체)

    // 속성
    this.grade = grade;
    this.ban = ban;
    this.name = name;

    //기능
    this.tinroduce = function(){
        return this.grade + "학년 " + this.ban + "반 " + this.name;
    }
}



//json

document.getElementById("btn3").addEventListener("click",function(){
    const std = new Student(5, 7, "김영희");
    console.log(std); //객체
    console.log(JSON.stringify(std)); //객체 -> JSON 문자열로 변환

    // ** JSON 변환 시 객체의 기능은 포함하지 않는다!!
    /*  this.tinroduce = function(){
        return this.grade + "학년 " + this.ban + "반 " + this.name;
    } 이거 없음*/
    // JSON은 데이터 전달에 특화된 형태
    // 결과 : {"grade":5,"ban":7,"name":"김영희"}

    const member = '{"memberID":"user01","memberPw":"pass01", "age":20}';
    console.log(member) //JSON 문자열
    console.log(JSON.parse(member)) // JSON -> 객체 변환
})