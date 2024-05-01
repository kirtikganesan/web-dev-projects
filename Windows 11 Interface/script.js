let taskbar=document.getElementsByClassName("taskbar")[0];
let startmenu=document.getElementsByClassName("startmenu")[0];
let icons=document.getElementsByClassName("icons")[0];
taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom=="50px"){
        startmenu.style.bottom="-650px"
    }
    else{
        startmenu.style.bottom="50px"
    }
})
icons.addEventListener("click",()=>{
    icons.style.backgroundColor="red";
})