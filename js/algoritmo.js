function DescubrirEmprendedor() {
    let rp1 = parseInt(document.getElementById("Pregunta1").value);
    let rp2 = parseInt(document.getElementById("Pregunta2").value);
    let rp3 = parseInt(document.getElementById("Pregunta3").value);
    let rp4 = parseInt(document.getElementById("Pregunta4").value);
    let rp5 = parseInt(document.getElementById("Pregunta5").value);
    let rp6 = parseInt(document.getElementById("Pregunta6").value);
    let rp7 = parseInt(document.getElementById("Pregunta7").value);
    let rp8 = parseInt(document.getElementById("Pregunta8").value);
    let rp9 = parseInt(document.getElementById("Pregunta9").value);
    let rp10 = parseInt(document.getElementById("Pregunta10").value);
    let rp11 = parseInt(document.getElementById("Pregunta11").value);
    let rp12 = parseInt(document.getElementById("Pregunta12").value);
    let rp13 = parseInt(document.getElementById("Pregunta13").value);
    let rp14 = parseInt(document.getElementById("Pregunta14").value);
    let rp15 = parseInt(document.getElementById("Pregunta15").value);
    let puntaje = 0
    let puntaje2 = 0  

    let lista_preguntas = [rp1, rp2, rp3, rp4, rp5, rp6, rp7, rp8, rp9, rp10, rp11, rp12, rp13, rp14, rp15]
    
    for (let i = 0; i<=14; i++) {
        if (lista_preguntas[i] === 0) {
            document.getElementById("puntajeDado").innerText = "Por favor escoge una opción en cada pregunta"
            return;
        } else if (lista_preguntas[i] === 1) {
            puntaje +=1;
        } else if (lista_preguntas[i] === 2) {
            puntaje +=2;
        } else {
            puntaje +=3;
        }
    }
    document.getElementById("saludoPersona").innerText = "¡Hola! " + Nombres+ " " + Apellidos
    document.getElementById("puntajeDado").innerText = "Tu nivel de emprendimiento es: " + Math.round(puntaje/45*100) +"%";

    if (puntaje>=15 && puntaje<22) {
        document.getElementById("nivelDado").innerText = "En tu categogía, de Emprendedor potencial:"
        document.getElementById("descripcion").innerText = "Posees la motivación, pero te falta enfoque o confianza para convertir ideas en acción."
        return;
    } else if (puntaje>=22 && puntaje<30) {
        document.getElementById("nivelDado").innerText = "En tu categogía, de Emprendedor en formación:"
        document.getElementById("descripcion").innerText = "Tienes iniciativa, pero necesitas estructurar mejor tus decisiones y fortalecer la constancia."
        return;
    } else if (puntaje>=30 && puntaje<38) {
        document.getElementById("nivelDado").innerText = "En tu categogía, de Emprendedor estratégico en desarrollo:"
        document.getElementById("descripcion").innerText = "Posees mentalidad emprendedora y planeas bien, aunque aún equilibras prudencia y acción."
        return;
    } else if (puntaje>=30 && puntaje<=45) {
        document.getElementById("nivelDado").innerText = "En tu categogía, de Emprendedor consolidado e innovador:"
        document.getElementById("descripcion").innerText = "Eres creativo, decidido y resiliente. Transformas ideas en oportunidades y lideras con visión."
        return;
    }
/* 
    for (let i = 0; i<=2; i++) {
        if (lista_preguntas[i] === 1) {
        puntaje2 += 1;
        } else if (lista_preguntas[i] === 2) {
        puntaje2 += 2;
        } else {
        puntaje2 += 3;
        }
    }

    document.getElementById("innovador").innerText = +puntaje2
 */
}


