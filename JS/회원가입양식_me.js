

document.getElementById("idName").addEventListener("keyup", function(){
    const regEx1=/^[a-z][a-zA-Z0-9-_]{6,14}$/;
    
    const idName = document.getElementById("idName");

    // 유효성 검사
    if(regEx1.test(this.value)){
        idName.classList.add("confirm");
        idName.classList.remove("error");
       
    } else {
        idName.classList.add("error");
        idName.classList.remove("confirm");
    }
})

document.getElementById("idCheck").addEventListener("keyup",function(){

})

document.getElementById("name").addEventListener("keyup", function(){

    const regEx2 =/^[가-힣]{2,5}$/;
    const regEx3 =/^[a-zA-Z0-9]$/;
    const nameResult = document.getElementById("nameResult");

    if(regEx2.test(this.value)){
        nameResult.innerText ="정상입력"
        nameResult.classList.add("nameConfirm");
        nameResult.classList.remove("nameError");
    }else if(regEx3.test(this.value)){
        nameResult.innerText = "한글만 입력하세요"

        nameResult.classList.add("nameError");
        nameResult.classList.remove("confirm");
    } else {
        nameResult.innerText="";
    }
})

document.getElementById("gender").addEventListener('check',function(){
  
  
})

document.getElementById(phone).addEventListener("input", function(){
   
    this.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
})