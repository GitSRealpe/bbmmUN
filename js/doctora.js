var msj = document.getElementById("recomendaciones");

function dotora(recom) {
    switch (recom) {
        case 1:
            msj.innerHTML = "<div class='alert alert-primary d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
                "<p style='margin: 0;'>tas super bien</p></div>" +
                "Tips y demas" +
                "<ul>" +
                "<li>tip 1</li>" +
                "</ul>";
            break;
        case 2:
            msj.innerHTML = "<div class='alert alert-success d-flex align-items-center' role='alert'><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
                "<p style='margin: 0;'>tas mas o menos bien</p></div>" +
                "Tips y demas" +
                "<ul>" +
                "<li>tip 1</li>" +
                "</ul>";
            break;
        case 3:
            msj.innerHTML = "<div class='alert alert-warning d-flex align-items-center' role='alert'><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<p style='margin: 0;'>no tas bien</p></div>" +
                "Tips y demas" +
                "<ul>" +
                "<li>tip 1</li>" +
                "</ul>";
            break;
        case 4:
            msj.innerHTML = "<div class='alert alert-orange d-flex align-items-center' role='alert'><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<p style='margin: 0;'>ojo con eso manito</p></div>" +
                "Tips y demas" +
                "<ul>" +
                "<li>tip 1</li>" +
                "</ul>";
            break;
        case 5:
            msj.innerHTML = "<div class='alert alert-danger d-flex align-items-center' role='alert'><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<p style='margin: 0;'>amiko come mejor porfavor</p></div>" +
                "Tips y demas" +
                "<ul>" +
                "<li>tip 1</li>" +
                "</ul>";
            break;

        default:
            break;
    }
}

function imcAdvise() {
    h = parseFloat(document.getElementById("alturaRange").value);
    w = parseFloat(document.getElementById("pesoRange").value);
    imc = w / (h * h);
    imc = Math.round((imc + 0.01 + Number.EPSILON) * 100) / 100
    document.getElementById("imcValue").innerHTML = imc;
}

function closeModal(params) {
    // var myModalEl = document.getElementById('modal');
    // var modal = bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();
    console.log("modal cerrado")
    return true;
}