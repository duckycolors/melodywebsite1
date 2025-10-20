
const ul = document.querySelector("#uList");
const thebtn = document.querySelector("#thebtn");
const zoyform = document.querySelector("#zoyform");
const zoyformbtn = document.querySelector("#zoyformbtn");
const zoytxt1 = document.querySelector("#zoytxt1");
const zoytxt2 = document.querySelector("#zoytxt2");
const art = document.getElementsByClassName("artwork");
const zoyclickertxt1 = document.querySelector(".zoyClicker");
const zoyclickernum = document.querySelector(".zoyClickerNum");
const zoyclickertxt2 = document.querySelector("#zoyprogress");
// const artArray = Array.from(art);

// const pkmnArtArray = document.querySelectorAll(".pkmnart");

audioCelebi = new Audio("sounds/celebi.ogg");
audioAbsolMega = new Audio("sounds/absol-mega.ogg");
audioLatias = new Audio("sounds/latias.ogg");
audioLeafeon = new Audio("sounds/leafeon.ogg");

audioCelebi.volume = 0.4;
audioAbsolMega.volume = 0.4;
audioLatias.volume = 0.4;
audioLeafeon.volume = 0.4;


thebtn?.addEventListener("click", onClick);
thebtn?.addEventListener("click", () => {
    zoyclickertxt1.appendChild(document.createTextNode("Zoys: "));
}, { once: true });

zoyformbtn?.addEventListener("click", zoySubmit);

document.addEventListener("click", (e) => {
    if (e.target.matches("#celebi")) {
        audioCelebi.play();
    } else if (e.target.matches("#absolmega")) {
        audioAbsolMega.play();
    } else if (e.target.matches("#latias")) {
        audioLatias.play();
    } else if (e.target.matches("#leafeon")) {
        audioLeafeon.play();
    }  else if (e.target.matches("#thebtn")) {
        audioZoy = new Audio("sounds/zoy.ogg");
        audioZoy.volume = 0.4;
        audioZoy.play();
    }
    
})

let clicks = 0;

function onClick() {
    clicks++;
    zoyclickernum.textContent = clicks;
    if (clicks >= 200) {
        zoyclickertxt2.textContent = "That's a CRAAAAAZY amount of zoys!"
        zoyclickertxt2.style.fontWeight = "900"
    } else if (clicks >= 100) {
        zoyclickertxt2.textContent = "That's a huge amount of zoys!"
        zoyclickertxt2.style.fontWeight = "600"
    } else if (clicks >= 50) {
        zoyclickertxt2.textContent = "That's a large amount of zoys!"
        zoyclickertxt2.style.fontStyle = "italic"
    } else if (clicks >= 25) {
        zoyclickertxt2.textContent = "That's a nice amount of zoys!"
    }
}

function zoySubmit() {
    if(zoyform.value == "") {
        zoytxt1.textContent = "I HAVE NOTHING";
        zoytxt2.textContent = "";
    } else {
        zoytxt1.textContent = "THANK YOU";
        zoytxt2.textContent = "FOR YOUR RESPONSE";
    }
}

// pkmnArtArray.forEach(art => {
//     art?.addEventListener("click", pkmnCry);
// });
    



    
