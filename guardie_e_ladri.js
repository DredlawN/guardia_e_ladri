let destra = document.getElementById("est").addEventListener("click", () => mossa("est"));
let sinistra = document.getElementById("ovest").addEventListener("click", () => mossa("ovest"));
let sopra = document.getElementById("nord").addEventListener("click", () => mossa("nord"));
let sotto = document.getElementById("sud").addEventListener("click", () => mossa("sud"));
let contaMosse = 20;
let guardia = document.getElementById("guardia");

function mossa(direzione) {
    let passo = 50;

    if (direzione === "nord"){
        if (parseInt(guardia.style.top) >= 50) {
            guardia.style.top = (parseInt(guardia.style.top) - passo) + "px";
        }

    } else if (direzione === "sud") {
        if (parseInt(guardia.style.top) < 450 ) {
            guardia.style.top = (parseInt(guardia.style.top) + passo) + "px";
        }
        
    } else if (direzione === "est") {
        if (parseInt(guardia.style.left) < 450) {
            guardia.style.left = (parseInt(guardia.style.left) + passo) + "px";
        }

    } else if (direzione === "ovest") {
        if (parseInt(guardia.style.left) > 0) {
            guardia.style.left = (parseInt(guardia.style.left) - passo) + "px";
        }
    }

    contaMosse--;
    stampaMosse();
}

function checkWinLose(){
        let guardia = document.getElementById("guardia");
        let ladro = document.getElementById("ladro");


        if(guardia.style.left == ladro.style.left && guardia.style.top == ladro.style.top ){
            document.getElementById("esito").innerHTML = "<p>Hai catturato il ladro, hai vinto!</p>"
            document.getElementById("nord").disabled = "true";
            document.getElementById("sud").disabled = "true";
            document.getElementById("est").disabled = "true";
            document.getElementById("ovest").disabled = "true";
        } else if(contaMosse == 0){
            document.getElementById("esito").innerHTML = "<p>Ritenta sarai piu fortunato la prossima volta, marameo</p>";
            document.getElementById("nord").disabled = "true";
            document.getElementById("sud").disabled = "true";
            document.getElementById("est").disabled = "true";
            document.getElementById("ovest").disabled = "true";
        }
}

function stampaMosse(){
    document.getElementById("esito").innerHTML = "<p>Mosse Rimaste:" + contaMosse + "</p>";
    checkWinLose();
}

