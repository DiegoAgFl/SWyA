function mostrarCifrado(id, id2) {
    var divs = document.getElementById("xd");
    divs.style.display = 'none';
    var div2 = document.getElementById("xd2");
    div2.style.display = 'none';

    // Muestra los divs con los IDs especificados
    var divAMostrar1 = document.getElementById(id);
    var divAMostrar2 = document.getElementById(id2);

    if (divAMostrar1) {
        divAMostrar1.style.display = 'block';
    }

    if (divAMostrar2) {
        divAMostrar2.style.display = 'block';
    }
}
        

