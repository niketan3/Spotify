var audio = new Audio();
const masterplay = document.getElementById('play');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const range = document.getElementById("range");

const gif= document.getElementById('gif');


const songtoplay = Array.from(document.getElementsByClassName('songname'));
const songplaying = document.getElementById('nowplaying');

const songlist = Array.from(document.getElementsByClassName("songitem"));

// our songs 
const songs = [{ songname: "Kabira", songpath: "/data/1.mp3", songbanner: "gf" },
{ songname: "Bekhayali_Kabir_Singh_(2019)", songpath: "/data/2.mp3", songbanner: "gf" },
{ songname: "Mere_Sohneya_Kabir_Singh_(2019)", songpath: "/data/3.mp3", songbanner: "gf" },
{ songname: "Kaise_Hua_Kabir_Singh_(2019)", songpath: "/data/4.mp3", songbanner: "gf" },
{ songname: "Yeh_Aaina_Kabir_Singh_(2019)", songpath: "/data/5.mp3", songbanner: "gf" },
{ songname: "Pehla_Pyaar_Kabir_Singh_(2019)", songpath: "/data/6.mp3", songbanner: "gf" },
{ songname: "Tera_Ban_Jaunga_Kabir_Singh_(2019)", songpath: "/data/7.mp3", songbanner: "gf" },
{ songname: "Tujhe_Kitna_Chahein_Aur_Kabir_Singh_(2019)", songpath: "/data/8.mp3", songbanner: "gf" },
{ songname: "Shayad_-_Love_Aaj_Kal", songpath: "/data/9.mp3", songbanner: "gf" },
{ songname: "Thodi_Jagah_-_Marjaavaan", songpath: "/data/10.mp3", songbanner: "gf" }
]
songlist.forEach((element, i) => {
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

masterplay.addEventListener('click', () => {

    if (audio.paused || audio.currentTime <= 0) {
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        audio.play();
        gif.style.opacity=1;
        
    }
    else {
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add('fa-play-circle');
        audio.pause();
        gif.style.opacity=0;
    }



})
audio.addEventListener("timeupdate", () => {
    var per = (audio.currentTime / audio.duration) * 100;
    range.value = per;
})
range.addEventListener('change', () => {
    audio.currentTime = (range.value * audio.duration) / 100;
})
let a=0;//for next play
let c=0;//for previous play
function find(p) {
    songs.forEach((element,i) => {
        if (element.songname == p) {
            audio.src = element.songpath;
            audio.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            a=i;
            c=i;
            gif.style.opacity=1;
        
            
            
        }
    })
    
    
}
songtoplay.forEach(element => {
    element.addEventListener('click', () => {
        songplaying.innerText = element.innerText;
        find(element.innerText);
        

    })
})
next.addEventListener('click',()=>{
    if (a==9)
    {
        audio.src=(songs[0].songpath);
        songplaying.innerText = songs[0].songname;
        audio.play();
        a=-1;
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        
        

    }
    if (a==a)
    {
        audio.src=(songs[a+1].songpath);
        songplaying.innerText = songs[a+1].songname;
        audio.play();
        a=a+1;
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    
    }
    else
    {
        audio.src=(songs[a+1].songpath);
   songplaying.innerText = songs[a+1].songname;
   audio.play();
   gif.style.opacity=1;
   masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
 
    }
 
})
previous.addEventListener('click',()=>{
    if (c==0)
    {
        audio.src=(songs[9].songpath);
        songplaying.innerText = songs[9].songname;
        audio.play();
        c=10;
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    }
    if (c==c)
    {
        audio.src=(songs[c-1].songpath);
        songplaying.innerText = songs[c-1].songname;
        audio.play();
        c=c-1;
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
       
    }
    else
    {
        audio.src=(songs[c-1].songpath);
   songplaying.innerText = songs[c-1].songname;
   audio.play();
   gif.style.opacity=1;
   masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
 
    }
 
})





