const words = [
    "GoogleDocs",
    "Etherpad",
    "Zoho",
    'LibreOffice',
    'Jarte',
    'WPSOffice',
    'words',
    'SoftMaker',
    'FreeOffice',
    'FreeOffice'];

const lvls = {
    "Easy": 10,
    "Normal": 7,
    "Hard": 5
};

let defaultLvelName = "Easy";
let defaultLevelSwconds = lvls[defaultLvelName];


let startButton = document.querySelector('.start');
let lvlNameSpan = document.querySelector('.massage .lva');
let secondsSpan = document.querySelector('.massage .seconds');
let theWord = document.querySelector('.the-word');
let upcomingWrds = document.querySelector('.upcoming-words');
let input = document.querySelector('.input');
let timeLeftSpan = document.querySelector('.time span');
let scoreGet = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finisMessage = document.querySelector('.finish');


lvlNameSpan.innerHTML = defaultLvelName;
secondsSpan.innerHTML = defaultLevelSwconds;
timeLeftSpan.innerHTML = defaultLevelSwconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function () {
    return false;
}

startButton.onclick = function () {
    this.remove();
    input.focus();
    genWords();
}


function genWords() {
    let randomWord = words[Math.floor(Math.random() * words.length)];

    let wordIndex = words.indexOf(randomWord);

    words.splice(wordIndex, 1);

    theWord.innerHTML = randomWord;

    upcomingWrds.innerHTML = '';

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWrds.appendChild(div);
    }
    startPlay()
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSwconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            clearInterval(start);

            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';

                scoreGet.innerHTML++;
                if (words.length > 0) {
                    genWords();
                } else {
                    let span = document.createElement('span');
                    span.className = 'ممتاز';
                    let spanText = document.createTextNode('مبروك');
                    span.appendChild(spanText);
                    finisMessage.appendChild(span);
                    upcomingWrds.remove();

                }
            } else {

                let span = document.createElement('span');
                span.className = 'bad';
                let spanText = document.createTextNode('المهلة انتهت');
                span.appendChild(spanText);
                finisMessage.appendChild(span)
            }
        }
    }, 1000);
}