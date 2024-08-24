var count=1;
document.querySelector('.btn-1').addEventListener("click",(e)=>{
    if(count>2)
    {
        count--;
    }else{
        count=3;
    }
    document.querySelector('.container-two-image').src="./Images/image"+count+".jpg"
})

document.querySelector('.btn-2').addEventListener("click",(e)=>{
    if(count==3)
    {
        count=1;
    }else{
        count++;
    }
    document.querySelector('.container-two-image').src="./Images/image"+count+".jpg"
})

document.querySelector('.container-one-two').addEventListener('click',async(e)=>{
    window.location.href = "http://localhost:5000/task2";
})

document.querySelector('.container-one-three').addEventListener('click',async(e)=>{
    window.location.href = "http://localhost:5000/task3";
})