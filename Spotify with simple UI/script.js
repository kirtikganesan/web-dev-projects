console.log("Welcome to Spotify");
//Inititalizing the variables
let audioElement=new Audio('/songs/1.mp3')
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItemPlay=document.getElementsByClassName('songItemPlay');
let masterSongName=document.getElementsByClassName('masterSongName')
let songs=[
    {songName:"  Warriyo - Mortels" , songPath:"/songs/1.mp3" , coverPath: "/covers/1.jpg"},
    {songName:"Cielo - Huma Huma" , songPath:"/songs/2.mp3" , coverPath: "/covers/2.jpg"},
    {songName:"DEF KEV - Invincible" , songPath:"/songs/3.mp3" , coverPath: "/covers/3.jpg"},
    {songName:"Different Heaven - My Heart" , songPath:"/songs/4.mp3" , coverPath: "/covers/4.jpg"},
    {songName:"Janji Heroes Tonight" , songPath:"/songs/5.mp3" , coverPath: "/covers/5.jpg"},
    {songName:"Rabba" , songPath:"/songs/6.mp3" , coverPath: "/covers/6.jpg"},
    {songName:"Sakhiyaan" , songPath:"/songs/7.mp3" , coverPath: "/covers/7.jpg"},
    {songName:"Bhula Dena" , songPath:"/songs/8.mp3" , coverPath: "/covers/8.jpg"},
    {songName:"Tumhari Kasam" , songPath:"/songs/9.mp3" , coverPath: "/covers/9.jpg"},

]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(songItemPlay).forEach(element => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
}
Array.from(songItemPlay).forEach(element => {
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songIndex=parseInt(e.target.id);
        makeAllPlays();
        masterSongName.innertext=songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongName.innertext=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
        masterSongName.innertext=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})