const shareButton = document.querySelector(".share_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const startButton = document.querySelector(".start_btn");

const modal = document.querySelector("#modal");
const loading = document.querySelector(".result-loading");
const result = document.querySelector(".timeResult");

function calculator(){
    const fieldValue = document.querySelector("#professional_name");
    let timeValue=document.querySelector("#study_hour");
    let timeValue_int=Number(timeValue.value);
    const fieldResult=document.querySelector(".field-result");
    const timeResult=document.querySelector(".time-result");

    if(timeValue_int>24||timeValue_int<=0){
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요');
        return false
    }else if(fieldValue.value===""){
        alert('값을 입력해주세요');
        fieldValue.focus();
        return false
    }else if(timeValue.value===""){
        alert("값을 입력해주세요");
        timeValue.focus();
        return false
    }
    result.style.display="none";
    loading.style.display='inline-block';

    setTimeout(function(){
        fieldResult.innerHTML=`${fieldValue.value}`;
        timeResult.innerHTML=parseInt((10000/timeValue_int),10);
        loading.style.display='none';
        result.style.display='flex';
    },1300);

}

function openModal(){
    modal.style.display='flex';

}

function closeModal(){
    modal.style.display='none';
}

window.onclick=function (event){
    if(event.target===modal){
        closeModal();
    }
};


function copyUrl(){
    let url = window.location.href;

    // let tmp = document.createElement('input');
    // document.body.appendChild(tmp);
    // tmp.value=url;
    // tmp.select();
    // document.execCommand("copy");
    // alert(`${url}이 복사되었습니다.`);
    // document.body.removeChild(tmp);

    navigator.clipboard.writeText(url).then(()=>{alert(`${url}이 복사되었습니다.`);});

}

shareButton.addEventListener('click',event=>{
    copyUrl();
    event.preventDefault();
});
openButton.addEventListener('click',(event)=>{
    openModal();
    event.preventDefault();
});
closeButton.addEventListener('click',(event)=>{
    closeModal();
    event.preventDefault();
});
startButton.addEventListener('click',(event)=>{
    calculator();
    event.preventDefault();
});