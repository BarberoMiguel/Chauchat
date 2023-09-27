var cargador = [];

function recargar(cargador) {
    let balas = Number();
    cargador.splice(0, 7);
    do {
        balas = Number(prompt("¿Cuántas balas quieres introducir en el cargador? (Máximo 7)"));
    } while (balas > 7 || balas < 0);
    for (let i = 0; i < balas; i++) {
        cargador[i] = "pium!"; 
    }
}

function chauchat(cargador) {
    let rafaga = 1;
    for (let i = 0; i < cargador.length; i++) {
        if (Math.random() >= 0.2) {
            console.log("Illo, me he quedao pillá!");
            cargador.splice(0, i);
            break;
        } else {
            if (rafaga == 3) {
                console.log(cargador[i]);
                console.log("espacio");
                cargador[i] = "";
                rafaga = 1;
            }  else {
                console.log(cargador[i]);
                console.log("\n");
                cargador[i] = "";
                rafaga += 1;
            }
            if (i == cargador.length -1) {
                cargador.splice(0, i + 1);
            }
        }
    }
}
console.log("Escribir recargar(cargador) para recargar y chauchat(cargador) para disparar:");