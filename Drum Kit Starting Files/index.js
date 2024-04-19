// const wdrum = document.getElementsByClassName("drum")[0];
// const adrum = document.getElementsByClassName("drum")[0];
// const sdrum = document.getElementsByClassName("drum")[0];
// const ddrum = document.getElementsByClassName("drum")[0];
// const jdrum = document.getElementsByClassName("drum")[0];
// const kdrum = document.getElementsByClassName("drum")[0];
// const ldrum = document.getElementsByClassName("drum")[0];

const wkey = document.getElementsByClassName("w")[0];
const akey = document.getElementsByClassName("a")[0];
const skey = document.getElementsByClassName("s")[0];
const dkey = document.getElementsByClassName("d")[0];
const jkey = document.getElementsByClassName("j")[0];
const kkey = document.getElementsByClassName("k")[0];
const lkey = document.getElementsByClassName("l")[0];

// // const crash = "./sounds/crash.mp3"

// // // let beat = new Audio("./sounds/crash.mp3")

// // // beat.play();

// // wdrum.addEventListener("click", () => {
// //     w.src = crash;
// //     w.play();
    
// // })

// // var crashsrc = "./sounds/" + "kick-bass.mp3";

// // var kick = document.querySelectorAll("button") [0];
// // kick.setAttribute("src", crashsrc);

// const tracks = [
//     {trackId : "./sounds/crash.mp3"},
//     // {trackId1 : "./sounds/kick.mp3"},
//     // {trackId2 : "./sounds/snare.mp3"}
// ];



    
// tracks.append(wdrum);
// wdrum.addEventListener("click", () => {
//     w.src = tracks.trackId;
//     w.play();
// });





wkey.addEventListener("click", () => {
    const waudio = new Audio();
    waudio.src = "./sounds/crash.mp3";
    waudio.play();
});

akey.addEventListener("click", () => {
    const aaudio = new Audio();
    aaudio.src = "./sounds/kick-bass.mp3";
    aaudio.play();
});

skey.addEventListener("click", () => {
    const saudio = new Audio();
    saudio.src = "./sounds/snare.mp3";
    saudio.play();
});

dkey.addEventListener("click", () => {
    const daudio = new Audio();
    daudio.src = "./sounds/tom-1.mp3";
    daudio.play();
});

jkey.addEventListener("click", () => {
    const jaudio = new Audio();
    jaudio.src = "./sounds/tom-2.mp3";
    jaudio.play();
});

kkey.addEventListener("click", () => {
    const kaudio = new Audio();
    kaudio.src = "./sounds/tom-3.mp3";
    kaudio.play();
});

lkey.addEventListener("click", () => {
    const laudio = new Audio();
    laudio.src = "./sounds/tom-4.mp3";
    laudio.play();
});


document.body.addEventListener("keydown", (ev) => {
    if (ev.key === "w") {
      const waudio = new Audio();
      waudio.src = "./sounds/crash.mp3";
      waudio.play();
    } else if (ev.key === "a") {
      const aaudio = new Audio();
      aaudio.src = "./sounds/kick-bass.mp3";
      aaudio.play();
    } else if (ev.key === "s") {
      const saudio = new Audio();
      saudio.src = "./sounds/snare.mp3";
      saudio.play();
    } else if (ev.key === "d") {
      const daudio = new Audio();
      daudio.src = "./sounds/tom-1.mp3";
      daudio.play();
    } else if (ev.key === "j") {
      const jaudio = new Audio();
      jaudio.src = "./sounds/tom-2.mp3";
      jaudio.play();
    } else if (ev.key === "k") {
      const kaudio = new Audio();
      kaudio.src = "./sounds/tom-3.mp3";
      kaudio.play();
    } else if (ev.key === "l") {
      const laudio = new Audio();
      laudio.src = "./sounds/tom-4.mp3";
      laudio.play();
    }else {
      console.log("Your letters are not allowed.See the page of letters, keep going!")
    }
  });

