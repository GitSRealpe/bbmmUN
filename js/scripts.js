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
    target.innerHTML = point;
    return;
}

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
            target.innerHTML = point;
            break;
        case "ombligo":
            point = pointsOmbligo(valor);
            target.innerHTML = point;
            break;
        case "sexo":
            console.log("camiado sexos")
            valor = document.getElementById("ombligoRange").value;
            point = pointsOmbligo(valor);
            target = document.getElementById("ombligoPoints");
            target.innerHTML = point;
            break;
    }
    return;

}