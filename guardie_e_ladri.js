let destra = document.getElementById("est").addEventListener("click", () => mossa("est"));
let sinistra = document.getElementById("ovest").addEventListener("click", () => mossa("ovest"));
let sopra = document.getElementById("nord").addEventListener("click", () => mossa("nord"));
let sotto = document.getElementById("sud").addEventListener("click", () => mossa("sud"));
let posizioneGuardia = document.getElementById("guardia");
let posizioneGuardiaSinistra = document.getElementById("guardia").style.left;
let posizioneGuardiaSopra = document.getElementById("guardia").style.top;
let posizioneLadro = document.getElementById("ladro");
let posizioneLadroSinistra = document.getElementById("ladro").style.left;
let posizioneLadroSopra = document.getElementById("ladro").style.top;
let contaMosse = 20;

document.addEventListener("Click", mossa);

function mossa(direzione) {
    let passo = 50;
    let guardia = document.getElementById("guardia");

    if (direzione === "nord")
    {
        if (guardia.style.top >= 0) {
            guardia.style.top = (parseInt(guardia.style.top) - passo) + "px";
        }
    } else if (direzione === "sud") {
        if (guardia.style.top < 500) {
            guardia.style.top = (parseInt(guardia.style.top) + passo) + "px";
        }
        
    } else if (direzione === "est") {
        if (guardia.style.left <= 450) {
            guardia.style.left = (parseInt(guardia.style.left) + passo) + "px";
        }
    } else if (direzione === "ovest") {
        if (guardia.style.left >= 0) {
            guardia.style.left = (parseInt(guardia.style.left) - passo) + "px";
        }
    }

    contaMosse--;
    stampaMosse();
}

function stampaMosse(){
    document.getElementById("esito").innerHTML = "<p>Mosse Rimaste:" + contaMosse + "</p>";
    checkWinLose();
}

function checkWinLose(){
        if(posizioneGuardia == posizioneLadro){
            document.getElementById("esito").innerHTML = "<p>Hai catturato il ladro, hai vinto!</p>"
        } else if(contaMosse == 0){
            document.getElementById("esito").innerHTML = "<p>Ritenta sarai piu fortunato la prossima volta, marameo</p>";
        }
        destra.disabled = "true";
        sinistra.disabled = "true";
        sopra.disabled = "true";
        sotto.disabled = "true";
}