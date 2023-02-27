// count를 전역함수로 만들기
let count = 0; 
document.getElementById("box1").addEventListener("mouseover", function(){
    if(count <= 10){
        this.style.backgroundColor='red';
        this.style.color='white';
        this.style.fontfamily="궁서";
        
        if(count==0){
            this.innerText ="사랑해";
        }else{
            this.innerText +="사랑해";
        }
        count++;    
    }else{
        this.innerText = "그만해!!";
        this.style.backgroundColor="black";
        this.style.color="white";
        this.style.fontfamily="궁서";
        this.style.lineHeight = "40px";
    }
})