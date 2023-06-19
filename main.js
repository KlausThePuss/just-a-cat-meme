/* //Decrease volume audio (not using)
const volume = document.querySelector("audio");
volume.volume = 0.015;
 */
//Real time clock
function realTimeClockOnLoad() {
    let clockFrame = new Date();
    let hours = clockFrame.getHours();
    let minutes = clockFrame.getMinutes(); 
    let seconds = clockFrame.getSeconds();

    let AMandPM = hours < 12 ? "AM" : "PM";

    hours = hours > 12 ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + /* ":" + seconds +  */ " " + AMandPM;

    let t = setTimeout(realTimeClockOnLoad, 500);
}

//Typewriter animation
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Olá", "Me chamo KlausThePuss ", "Gostaria de ver um meme?"];
  const el = document.getElementById("typewriterAnimation");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 22);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 8);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();

//Show meme onClick
function showMeme() {
    document.getElementById("content2").style.display="flex"
    document.getElementById("content1").style.display="none"

}

//Hide meme onClick
function hideMeme() {
    document.getElementById("content2").style.display="none"
    document.getElementById("content1").style.display="flex"

}

//Play audio onClick
let audio = document.getElementById("audio");
let showMemeBTN = document.getElementById("showMemeBTN");
let count = 0;

function playAudio() {
    if (count == 0) {
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause();
    }
}

//Stop audio onClick
function stopAudio() {
    playAudio();
    audio.pause();
    audio.currentTime = 0;
}


//



