let destra = document.getElementById("est").addEventListener("click", () => mossa("est"));
let sinistra = document.getElementById("ovest").addEventListener("click", () => mossa("ovest"));
let sopra = document.getElementById("nord").addEventListener("click", () => mossa("nord"));
let sotto = document.getElementById("sud").addEventListener("click", () => mossa("sud"));
let contaMosse = 20;
let guardia = document.getElementById("guardia");
let ladro = document.getElementById("ladro");
let passo = 50;

function mossa(direzione) {


    if (direzione === "nord"){ //0
        if (parseInt(guardia.style.top) >= 50) {
            guardia.style.top = (parseInt(guardia.style.top) - passo) + "px";
            mossaLadro();
        }

    } else if (direzione === "sud") { //1
        if (parseInt(guardia.style.top) < 450 ) {
            guardia.style.top = (parseInt(guardia.style.top) + passo) + "px";
            mossaLadro();
        }
        
    } else if (direzione === "est") { //2
        if (parseInt(guardia.style.left) < 450) {
            guardia.style.left = (parseInt(guardia.style.left) + passo) + "px";
            mossaLadro();
        }

    } else if (direzione === "ovest") { //3
        if (parseInt(guardia.style.left) > 0) {
            guardia.style.left = (parseInt(guardia.style.left) - passo) + "px";
            mossaLadro();
        }
    }

    contaMosse--;
    stampaMosse();
}

function mossaLadro (){
    mossaCasuale = Math.floor(Math.random()*3);
    

    if(mossaCasuale == 0){ //destra
        if(parseInt(ladro.style.left) == 500){
            mossaLadro();
        }
        else if (parseInt(ladro.style.left) < 450) {
            ladro.style.left = (parseInt(ladro.style.left) + passo) + "px";
        }
    }else if( mossaCasuale == 1){ //sinistra
        if(parseInt(ladro.style.left) == 0){
            mossaLadro();
        }
        else if(parseInt(ladro.style.left) > 0){
            ladro.style.left = (parseInt(ladro.style.left) - passo) +"px";
        }
    }else if( mossaCasuale == 2){//sopra
        if(parseInt(ladro.style.top) == 0){
            mossaLadro();
        }
        else if(parseInt(ladro.style.top)>= 50){
            ladro.style.top = (parseInt(ladro.style.top) - passo) + "px";
        }
    }else if(mossaCasuale == 3){
        if(parseInt(ladro.style.top) == 500){
            mossaLadro();
        }
        else if(parseInt(ladro.style.top)<= 450){
            ladro.style.top = (parseInt(ladro.style.top) + passo )+ "px";
        }
    }

}


function checkWinLose(){

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

