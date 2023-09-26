var cargador = [];

function recargar(cargador) {
    for (let i = 0; i < 7; i++) {
        cargador[i] = "pium!"; 
    }
}

function chauchat(cargador) {
    for (let i = 0; i < cargador.length; i++) {
        let rafaga = 1;
        if (Math.random() >= 0.8) {
            console.log("Illo, me he quedao pillá!");
            cargador.splice(0, i);
            break;
        } else {
            if (rafaga == 3) {
                console.log(cargador[i]+"\n");
                cargador[i] = "";
                console.log("\n");
                rafaga = 1;
            }  else {
                console.log(cargador[i]+"\n");
                cargador[i] = "";
                rafaga += 1;
            }
            if (i == cargador.length -1) {
                cargador.splice(0, i + 1);
            }
        }
    }
}