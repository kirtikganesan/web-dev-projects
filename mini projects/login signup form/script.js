const title=document.getElementById('title');
const namefield=document.getElementById('namefield')
const loginbtn=document.getElementById('loginbtn')
const signupbtn=document.getElementById('signupbtn')

signupbtn.onclick=function(){
    title.innerHTML="Sign up";
    namefield.style.display="block"
}
loginbtn.onclick=function(){
    title.innerHTML="Login"
    namefield.style.display="none"
}