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
        imcClass.innerHTML = "<div class='alert alert-primary' role='alert'>" +
            "<div class='text-center'>" +
            "<h4><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
            "Clasificación = Peso Bajo</h4></div>" +
            "<hr>" +
            "<div class='blockquote-footer mt-0'>" +
            "Ref: American Diabetes Association Professional Practice Committee; <q>8. Obesity and Weight Management for the Prevention and Treatment of Type 2 Diabetes: <i>Standards of Medical Care in Diabetes—2022</i></q>," +
            "<cite title='Diabetes Care'>Diabetes Care</cite>, " +
            "January 2022; Vol:45 (Supplement_1): S113-S124. " +
            "<br class='d-sm-none'>" +
            "<a href='https://doi.org/10.2337/dc22-S008' target='_blank' rel='noopener noreferrer'>" +
            "DOI: 10.2337/dc22-S008</a>" +
            "</div>" +
            "</div>";
    }
    if (18.50 <= imc && imc <= 24.99) {
        imcClass.innerHTML = "<div class='alert alert-success' role='alert'>" +
            "<div class='text-center'>" +
            "<h4><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#info-fill'/></svg>" +
            "Clasificación = Peso Normal</h4></div>" +
            "<hr>" +
            "<div class='blockquote-footer mt-0'>" +
            "Ref: American Diabetes Association Professional Practice Committee; <q>8. Obesity and Weight Management for the Prevention and Treatment of Type 2 Diabetes: <i>Standards of Medical Care in Diabetes—2022</i></q>," +
            "<cite title='Diabetes Care'>Diabetes Care</cite>, " +
            "January 2022; Vol:45 (Supplement_1): S113-S124. " +
            "<br class='d-sm-none'>" +
            "<a href='https://doi.org/10.2337/dc22-S008' target='_blank' rel='noopener noreferrer'>" +
            "DOI: 10.2337/dc22-S008</a>" +
            "</div>" +
            "</div>";
    }
    if (24.99 <= imc && imc <= 27) {
        imcClass.innerHTML = "<div class='alert alert-warning' role='alert'>" +
            "<div class='text-center'>" +
            "<h4><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Sobrepeso</h4></div>" +
            "Le recomendamos consultar a un profesional en nutrición, evitar ganar más peso y seguir las siguientes recomendaciones de cambio en el estilo de vida:" +
            "<ul>" +
            "<li>Iniciar actividad física de intensidad moderada como caminatas a paso rápido, natación, trote, bicicleta, etc., por lo menos por 150 minutos cada semana. Para perder por lo menos el 5% del peso actual y mantenerse allí.</li>" +
            "<li>No consumir alimentos procesados y artificiales como <q>paquetes</q>, gaseosas, dulces y postres.</li>" +
            "<li>Mantener el consumo de frutas y verduras mínimo en una comida del día, luego de ser lavadas con abundante agua.</li>" +
            "<li>Evite los jugos, en su lugar consuma abundante agua e infusiones sin azúcar o panela.</li>" +
            "<li>Disminuya los alimentos con abundantes grasas y/o aceites, como fritos, sumado a una disminución en el consumo de sal (utilizar la mitad de lo consumido habitualmente). Se recomienda no dejar el salero al alcance de la mesa. </li>" +
            "</ul>" +
            "<hr>" +
            "<div class='blockquote-footer mt-0'>" +
            "Ref: American Diabetes Association Professional Practice Committee; <q>8. Obesity and Weight Management for the Prevention and Treatment of Type 2 Diabetes: <i>Standards of Medical Care in Diabetes—2022</i></q>," +
            "<cite title='Diabetes Care'>Diabetes Care</cite>, " +
            "January 2022; Vol:45 (Supplement_1): S113-S124. " +
            "<br class='d-sm-none'>" +
            "<a href='https://doi.org/10.2337/dc22-S008' target='_blank' rel='noopener noreferrer'>" +
            "DOI: 10.2337/dc22-S008</a>" +
            "</div>" +
            "</div>";
    }
    if (27 <= imc && imc <= 29.99) {
        imcClass.innerHTML = "<div class='alert alert-orange' role='alert'>" +
            "<div class='text-center'>" +
            "<h4><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Obesidad</h4></div>" +
            "Le sugerimos consultar a su médico y asistir a consulta con el nutricionista para dirigir la pérdida de peso efectiva. Es importante evitar ganar más peso y seguir las siguientes recomendaciones de cambio en el estilo de vida:" +
            "<ul>" +
            "<li>Iniciar actividad física de intensidad moderada como caminatas a paso rápido, natación, trote, bicicleta, etc., por lo menos por 150 minutos cada semana. Para perder por lo menos el 5% del peso actual y mantenerse allí. <strong>Consulte a su médico antes de iniciar cualquier actividad física nueva, para cerciorarse de la seguridad de la misma</strong>.</li>" +
            "<li>No consumir alimentos procesados y artificiales como <q>paquetes</q>, gaseosas, dulces y postres.</li>" +
            "<li>Mantener el consumo de frutas y verduras mínimo en una comida del día, luego de ser lavadas con abundante agua.</li>" +
            "<li>Evite los jugos en su lugar, consuma abundante agua e infusiones sin azúcar o panela.</li>" +
            "<li>Disminuya los alimentos con abundantes grasas y/o aceites como fritos, sumado a una disminución en el consumo de sal puede ser a la mitad de la ingestas habitual (se recomienda no dejar el salero al alcance de la mesa).</li>" +
            "</ul>" +
            "<hr>" +
            "<div class='blockquote-footer mt-0'>" +
            "Ref: American Diabetes Association Professional Practice Committee; <q>8. Obesity and Weight Management for the Prevention and Treatment of Type 2 Diabetes: <i>Standards of Medical Care in Diabetes—2022</i></q>," +
            "<cite title='Diabetes Care'>Diabetes Care</cite>, " +
            "January 2022; Vol:45 (Supplement_1): S113-S124. " +
            "<br class='d-sm-none'>" +
            "<a href='https://doi.org/10.2337/dc22-S008' target='_blank' rel='noopener noreferrer'>" +
            "DOI: 10.2337/dc22-S008</a>" +
            "</div>" +
            "</div>";
    }
    if (30 <= imc) {
        imcClass.innerHTML = "<div class='alert alert-danger' role='alert'>" +
            "<div class='text-center'>" +
            "<h4><svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
            "Clasificación = Obesidad</h4></div>" +
            "Le sugerimos consultar a su médico y tomar consulta con el nutricionista para dirigir la pérdida de peso efectiva. Es importante evitar ganar más peso y seguir las siguientes recomendaciones de cambio en el estilo de vida:" +
            "<ul>" +
            "<li>Iniciar actividad física de intensidad moderada como caminatas a paso rápido, natación, trote, bicicleta, etc., por lo menos por 150 minutos cada semana. Para perder por lo menos el 5% del peso actual y mantenerse allí. <strong>Consulte a su médico antes de iniciar cualquier actividad física nueva, para cerciorarse de la seguridad de la misma</strong>.</li>" +
            "<li>No consumir alimentos procesados y artificiales como <q>paquetes</q>, gaseosas, dulces y postres.</li>" +
            "<li>Mantener el consumo de frutas y verduras mínimo en una comida del día, luego de ser lavadas con abundante agua.</li>" +
            "<li>Evite los jugos en su lugar, consuma abundante agua e infusiones sin azúcar o panela.</li>" +
            "<li>Disminuya los alimentos con abundantes grasas y/o aceites como fritos, sumado a una disminución en el consumo de sal a la mitad de lo consumido habitualmente (se recomienda no dejar el salero al alcance de la mesa).</li>" +
            "</ul>" +
            "<hr>" +
            "<div class='blockquote-footer mt-0'>" +
            "Ref: American Diabetes Association Professional Practice Committee; <q>8. Obesity and Weight Management for the Prevention and Treatment of Type 2 Diabetes: <i>Standards of Medical Care in Diabetes—2022</i></q>," +
            "<cite title='Diabetes Care'>Diabetes Care</cite>, " +
            "January 2022; Vol:45 (Supplement_1): S113-S124. " +
            "<br class='d-sm-none'>" +
            "<a href='https://doi.org/10.2337/dc22-S008' target='_blank' rel='noopener noreferrer'>" +
            "DOI: 10.2337/dc22-S008</a>" +
            "</div>" +
            "</div>";
    }
    // if (35 <= imc && imc <= 39.99) {
    //     imcClass.innerHTML = "<div class='alert alert-danger  align-items-center' role='alert'>" +
    //         "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
    //         "Clasificación = Obesidad Media</div>";
    // }
    // if (40 <= imc) {
    //     imcClass.innerHTML = "<div class='alert alert-danger  align-items-center' role='alert'>" +
    //         "<svg class='bi flex-shrink-0 me-2' width='24' height='24' role='img' aria-label='Info:'><use xlink:href='#exclamation-triangle-fill'/></svg>" +
    //         "Clasificación = Obesidad Mórbida</div>";
    // }

}

function closeModal(params) {
    // var myModalEl = document.getElementById('modal');
    // var modal = bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();
    console.log("modal cerrado")
    return true;
}