var msj = document.getElementById("recomendaciones");

function dotora(recom) {
    switch (recom) {
        case 1:
            msj.innerHTML = "<div class='alert alert-primary d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
                "<h3 style='margin: 0;'>1% - Riesgo Bajo</h3></div>" +
                "Tu riesgo de presentar diabetes mellitus tipo 2 en 10 años es <strong>bajo</strong>, aconsejamos que:" +
                "<ul>" +
                "<li>Mantengas una actividad física regular.</li>" +
                "<li>Continúes una alimentación basada en frutas, verduras y legumbres.</li>" +
                "</ul>" +
                "<div class='blockquote-footer pt-1'>" +
                "Ref: American Diabetes Association; <q><i>Standards of Medical Care in Diabetes—2022</i> Abridged for Primary Care Providers</q>," +
                "<cite title='Clin Diabetes'>Clin Diabetes</cite>, " +
                "January 2022; Vol:40 (1): 10-38. " +
                "<br class='d-sm-none'>" +
                "<a href='https://doi.org/10.2337/cd22-as01' target='_blank' rel='noopener noreferrer'>" +
                "DOI: 10.2337/cd22-as01</a>" +
                "</div>";
            break;
        case 2:
            msj.innerHTML = "<div class='alert alert-success d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
                "<h3 style='margin: 0;'>4% - Ligeramente elevado</h3></div>" +
                "Tu riesgo de presentar diabetes mellitus tipo 2 en 10 años es <strong>ligeramente elevado</strong>, recomendamos:" +
                "<ul>" +
                "<li>Monitorees tu peso para mantenerlo en rango de normalidad según el índice de masa corporal (IMC).</li>" +
                "<li>Realices actividad física de intensidad moderada al menos 150 minutos por semana.</li>" +
                "<li>Alimentarte de manera adecuada evitando los alimentos azucarados.</li>" +
                "</ul>" +
                "<div class='blockquote-footer pt-1'>" +
                "Ref: American Diabetes Association; <q><i>Standards of Medical Care in Diabetes—2022</i> Abridged for Primary Care Providers</q>," +
                "<cite title='Clin Diabetes'>Clin Diabetes</cite>, " +
                "January 2022; Vol:40 (1): 10-38. " +
                "<br class='d-sm-none'>" +
                "<a href='https://doi.org/10.2337/cd22-as01' target='_blank' rel='noopener noreferrer'>" +
                "DOI: 10.2337/cd22-as01</a>" +
                "</div>";
            break;
        case 3:
            msj.innerHTML = "<div class='alert alert-warning d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<h3 style='margin: 0;'>17% Riesgo moderado</h3></div>" +
                "Posees un <strong>riesgo moderado</strong> de presentar diabetes mellitus tipo 2 en 10 años. Es necesario consultar a tu médico de confianza para que se realicen estudios adicionales que permitan descartar enfermedades metabólicas." +
                "<div class='blockquote-footer mt-0'>" +
                "Ref: American Diabetes Association; <q><i>Standards of Medical Care in Diabetes—2022</i> Abridged for Primary Care Providers</q>," +
                "<cite title='Clin Diabetes'>Clin Diabetes</cite>, " +
                "January 2022; Vol:40 (1): 10-38. " +
                "<br class='d-sm-none'>" +
                "<a href='https://doi.org/10.2337/cd22-as01' target='_blank' rel='noopener noreferrer'>" +
                "DOI: 10.2337/cd22-as01</a>" +
                "</div>";
            break;
        case 4:
            msj.innerHTML = "<div class='alert alert-orange d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<h3 style='margin: 0;'>33% Riesgo alto</h3></div>" +
                "Tienes un <strong>riesgo alto</strong> de presentar diabetes mellitus tipo 2 en 10 años. Es necesario que consultes con tu médico de confianza para que se realicen estudios adicionales para hacer seguimiento o descartar enfermedades metabólicas." +
                "<div class='blockquote-footer mt-0'>" +
                "Ref: American Diabetes Association; <q><i>Standards of Medical Care in Diabetes—2022</i> Abridged for Primary Care Providers</q>," +
                "<cite title='Clin Diabetes'>Clin Diabetes</cite>, " +
                "January 2022; Vol:40 (1): 10-38. " +
                "<br class='d-sm-none'>" +
                "<a href='https://doi.org/10.2337/cd22-as01' target='_blank' rel='noopener noreferrer'>" +
                "DOI: 10.2337/cd22-as01</a>" +
                "</div>";
            break;
        case 5:
            msj.innerHTML = "<div class='alert alert-danger d-flex align-items-center' role='alert'>" +
                "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
                "<h3 style='margin: 0;'>50% Riesgo muy alto</h3></div>" +
                "Tu riesgo de presentar diabetes mellitus tipo 2 es <strong>muy alto</strong>. Es necesario que consultes a tu médico de confianza para que te realicen estudios adicionales y hacer seguimiento o descartar enfermedades metabólicas." +
                "<div class='blockquote-footer mt-0'>" +
                "Ref: American Diabetes Association; <q><i>Standards of Medical Care in Diabetes—2022</i> Abridged for Primary Care Providers</q>," +
                "<cite title='Clin Diabetes'>Clin Diabetes</cite>, " +
                "January 2022; Vol:40 (1): 10-38. " +
                "<br class='d-sm-none'>" +
                "<a href='https://doi.org/10.2337/cd22-as01' target='_blank' rel='noopener noreferrer'>" +
                "DOI: 10.2337/cd22-as01</a>" +
                "</div>";
            break;

        default:
            break;
    }
}

var imcClass = document.getElementById("imcClass")

function imcAdvise() {
    h = parseFloat(document.getElementById("alturaRange").value);
    w = parseFloat(document.getElementById("pesoRange").value);
    imc = w / (h * h);
    imc = Math.round((imc + 0.01 + Number.EPSILON) * 100) / 100
    document.getElementById("imcValue").innerHTML = imc;

    if (imc < 18.49) {
        imcClass.innerHTML = "<div class='alert alert-primary d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
            "Clasificación = Peso Bajo</div>";
    }
    if (18.50 <= imc && imc <= 24.99) {
        imcClass.innerHTML = "<div class='alert alert-success d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
            "Clasificación = Peso Normal</div>";
    }
    if (25 <= imc && imc <= 29.99) {
        imcClass.innerHTML = "<div class='alert alert-warning d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Sobrepeso</div>";
    }
    if (30 <= imc && imc <= 34.99) {
        imcClass.innerHTML = "<div class='alert alert-orange d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Obesidad Leve</div>";
    }
    if (35 <= imc && imc <= 39.99) {
        imcClass.innerHTML = "<div class='alert alert-purple d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Obesidad Media</div>";
    }
    if (40 <= imc) {
        imcClass.innerHTML = "<div class='alert alert-danger d-flex align-items-center' role='alert'>" +
            "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Obesidad Mórbida</div>";
    }

}

function closeModal(params) {
    // var myModalEl = document.getElementById('modal');
    // var modal = bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();
    console.log("modal cerrado")
    return true;
}