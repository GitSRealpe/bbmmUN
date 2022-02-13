function pointsEdad(valor) {
    valor = parseInt(valor);
    if (valor < 45) {
        point = 0;
    }
    if (45 <= valor && valor <= 54) {
        point = 2;
    }
    if (55 <= valor && valor <= 64) {
        point = 3;
    }
    if (64 < valor) {
        point = 4;
    }
    return point;
}

function pointsOmbligo(valor) {
    var checked_gender = document.querySelector('input[name = "genderOpt"]:checked')
    console.log(checked_gender.value, valor)
    var point;
    valor = parseInt(valor);
    switch (checked_gender.value) {
        case "Masculino":
            if (valor < 94) {
                point = 0;
            }
            if (94 <= valor && valor <= 102) {
                point = 3;
            }
            if (102 < valor) {
                point = 4;
            }
            break;
        case "Femenino":
            if (valor < 80) {
                point = 0;
            }
            if (80 <= valor && valor <= 88) {
                point = 3;
            }
            if (88 < valor) {
                point = 4;
            }
            break;
        default:
            break;
    }
    return point;
}

var h = 0, w = 0, imc = 0;
function pointsIMC() {
    h = parseFloat(document.getElementById("alturaRange").value);
    w = parseFloat(document.getElementById("pesoRange").value);
    imc = w / (h * h);
    imc = Math.round((imc + 0.01 + Number.EPSILON) * 100) / 100
    console.log(imc);
    ///
    target = document.getElementById("imcValue");
    target.innerHTML = imc;
    target = document.getElementById("imcLabel");
    target.innerHTML = imc;
    target = document.getElementById("imcPoints");
    if (imc < 25) {
        point = 0;
    }
    if (25 <= imc && imc <= 30) {
        point = 1;
    }
    if (30 < imc) {
        point = 3;
    }
    puntos[2] = point;
    target.innerHTML = point;
    return;
}

function pointsExer(valor) {
    var checked_exer = document.querySelector('input[name = "exerOpt"]:checked')
    var point;
    valor = parseInt(valor);
    switch (checked_exer.value) {
        case "Si":
            point = 0;
            break;
        case "No":
            point = 2;
            break;
        default:
            break;
    }
    return point;
}

function pointsFrutas(valor) {
    var checked_exer = document.querySelector('input[name = "frutasOpt"]:checked')
    var point;
    valor = parseInt(valor);
    switch (checked_exer.value) {
        case "Si":
            point = 0;
            break;
        case "No":
            point = 1;
            break;
        default:
            break;
    }
    return point;
}

function pointsMeds(valor) {
    var checked_exer = document.querySelector('input[name = "medsOpt"]:checked')
    var point;
    valor = parseInt(valor);
    switch (checked_exer.value) {
        case "Si":
            point = 2;
            break;
        case "No":
            point = 0;
            break;
        default:
            break;
    }
    return point;
}

function pointsGluc(valor) {
    var checked_exer = document.querySelector('input[name = "glucOpt"]:checked')
    var point;
    valor = parseInt(valor);
    switch (checked_exer.value) {
        case "Si":
            point = 5;
            break;
        case "No":
            point = 0;
            break;
        default:
            break;
    }
    return point;
}

function pointsFam(valor) {
    var checked_exer = document.querySelector('input[name = "famOpt"]:checked')
    var point;
    valor = parseInt(valor);
    switch (checked_exer.value) {
        case "Si:abuelos, tíos o primos hermanos":
            point = 3;
            break;
        case "Si: padres, hermanos o hijos":
            point = 5;
            break;
        case "No":
            point = 0;
            break;
        default:
            break;
    }
    return point;
}

function inactive(row, prg) {
    for (let index = 0; index < row.length; index++) {
        document.getElementById(row[index]).classList.add("text-muted");
        document.getElementById(row[index]).classList.remove("table-active");
    }
    for (let index = 0; index < prg.length; index++) {
        document.getElementById(prg[index]).classList.remove("bg-primary");
        document.getElementById(prg[index]).classList.remove("bg-success");
        document.getElementById(prg[index]).classList.remove("bg-orange");
        document.getElementById(prg[index]).classList.remove("bg-warning");
        document.getElementById(prg[index]).classList.remove("bg-danger");
        document.getElementById(prg[index]).classList.add("bg-secondary");
        document.getElementById(prg[index]).classList.remove("progress-bar-animated");
        document.getElementById(prg[index]).classList.remove("progress-bar-striped");
    }    
}

window.onload = function() {
    inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
  };

function active(row, prg, bg) {
    document.getElementById(row).classList.remove("text-muted");
    document.getElementById(row).classList.add("table-active");
    document.getElementById(prg).classList.remove("bg-secondary");
    document.getElementById(prg).classList.add("progress-bar-striped");
    document.getElementById(prg).classList.add("progress-bar-animated");
    document.getElementById(prg).classList.add(bg);
}

function interpretación(suma) {
    if (suma < 7) {
        inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
        active("row1","prg1","bg-primary")
    }
    if (7<=suma && suma<=11 ) {
        inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
        active("row2","prg2","bg-success")
    }
    if (12<=suma && suma<=14) {
        inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
        active("row3","prg3","bg-warning")
    }
    if (15<=suma && suma<=20) {
        inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
        active("row4","prg4","bg-orange")
    }
    if (20<suma) {
        inactive(["row1","row2","row3","row4","row5"],["prg1","prg2","prg3","prg4","prg5"]);
        active("row5","prg5","bg-danger")
    }
}

let puntos = [];
var suma = 0;
function cambio(label, valor) {
    // console.log("suma")
    console.log("cambiaso", label, "valor", valor)
    var target = document.getElementById(label + "Label");
    target.innerHTML = valor;
    target = document.getElementById(label + "Points");
    var point;
    if (label == "altura" || label == "peso") {
        pointsIMC();
    }
    switch (label) {
        case "edad":
            point = pointsEdad(valor);
            puntos[0] = point;
            target.innerHTML = point;
            break;
        case "ombligo":
            point = pointsOmbligo(valor);
            puntos[1] = point;
            target.innerHTML = point;
            break;
        case "sexo":
            valor = document.getElementById("ombligoRange").value;
            point = pointsOmbligo(valor);
            puntos[1] = point;
            target = document.getElementById("ombligoPoints");
            target.innerHTML = point;
            break;
        case "exer":
            point = pointsExer(valor);
            puntos[3] = point;
            target.innerHTML = point;
            break;
        case "frutas":
            point = pointsFrutas(valor);
            puntos[4] = point;
            target.innerHTML = point;
            break;
        case "meds":
            point = pointsMeds(valor);
            puntos[5] = point;
            target.innerHTML = point;
            break;
        case "gluc":
            point = pointsGluc(valor);
            puntos[6] = point;
            target.innerHTML = point;
            break;
        case "fam":
            point = pointsFam(valor);
            puntos[7] = point;
            target.innerHTML = point;
            break;
    }

    console.log("suma", puntos.reduce((a, b) => a + b, 0))
    suma = puntos.reduce((a, b) => a + b, 0);
    target = document.getElementById("total");
    target.innerHTML = suma;
    interpretación(suma);
    return;
}