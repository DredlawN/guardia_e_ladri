let destra = document.getElementbyID("est");
let sinistra = document.getElementById("ovest");
let sopra = document.getElementById("nord");
let sotto = document.getElementById("sud");
let posizioneGuardia = document.getElementById("guardia");
let posizioneLadro = document.getElementById("ladro");
let contaMosse = 20;

document.addEventListener("Click", mossa);

function mossa(){
    if (sopra){
        // sposta guardia sopra
    }else if(sotto){
        //sposta guardia sotto
    }else if(destra){
        //sposta guardia destra
    }else if (sinistra){
        //sposta guardia sinistra
    }
    contaMosse--;
    stampaMosse();
}

function stampaMosse(){
    document.getElementById("esito").innerHTML = "<p>Mosse Rimaste:'+contamosse'</p>";
    checkWinLose();
}

function checkWinLose(){
    if(posizioneGuardia){

    }else if(contaMosse == 0){
        document.getElementById("esito").innerHTML = "<p>Ritenta sarai piu fortunato la prossima volta, marameo</p>";
    }
}