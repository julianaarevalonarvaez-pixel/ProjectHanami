//CREACION DE FACTURA DE VENTAS DE COMIDAS RAPIDAS
function mostrar() {

    // =========================
    // PRODUCTO 1
    // =========================
    if (item1.selectedIndex == 0) {

        document.getElementById("desc1").value = "";
        document.getElementById("cant01").value = "";
        document.getElementById("vau01").value = "";
        document.getElementById("vat01").value = "";

    } else {

        document.getElementById("desc1").value =
            item1.options[item1.selectedIndex].text;

        document.getElementById("vau01").value =
            item1.value;

        document.getElementById("vat01").value =
            parseFloat(document.getElementById("cant01").value || 0) *
            parseFloat(item1.value);
    }


    // =========================
    // PRODUCTO 2
    // =========================
    if (item2.selectedIndex == 0) {

        document.getElementById("desc2").value = "";
        document.getElementById("cant02").value = "";
        document.getElementById("vau02").value = "";
        document.getElementById("vat02").value = "";

    } else {

        document.getElementById("desc2").value =
            item2.options[item2.selectedIndex].text;

        document.getElementById("vau02").value =
            item2.value;

        document.getElementById("vat02").value =
            parseFloat(document.getElementById("cant02").value || 0) *
            parseFloat(item2.value);
    }


    // =========================
    // PRODUCTO 3
    // =========================
    if (item3.selectedIndex == 0) {

        document.getElementById("desc3").value = "";
        document.getElementById("cant03").value = "";
        document.getElementById("vau03").value = "";
        document.getElementById("vat03").value = "";

    } else {

        document.getElementById("desc3").value =
            item3.options[item3.selectedIndex].text;

        document.getElementById("vau03").value =
            item3.value;

        document.getElementById("vat03").value =
            parseFloat(document.getElementById("cant03").value || 0) *
            parseFloat(item3.value);
    }


    // =========================
    // SERVICIOS ADICIONALES
    // =========================

    let totalAdicionales = 0;

    // Seguro vehicular
    if (document.getElementById("check1").checked) {
        totalAdicionales += 2500000;
    }

    // Personalización deportiva
    if (document.getElementById("check2").checked) {
        totalAdicionales += 1800000;
    }

    // Servicio de entrega
    if (document.getElementById("check3").checked) {
        totalAdicionales += 500000;
    }

    document.getElementById("adic").value = totalAdicionales;


    // =========================
    // SUBTOTAL
    // =========================

    let subtotal =
        parseFloat(document.getElementById("vat01").value || 0) +
        parseFloat(document.getElementById("vat02").value || 0) +
        parseFloat(document.getElementById("vat03").value || 0) +
        totalAdicionales;

    document.getElementById("subt").value = subtotal;


    // =========================
    // DESCUENTO
    // =========================

    let descuento = 0;

    // 5% de descuento si el subtotal supera $200.000.000
    if (subtotal >= 200000000) {
        descuento = subtotal * 0.05;
    }

    document.getElementById("desc").value = descuento;


    // =========================
    // TOTAL A PAGAR
    // =========================

    let total = subtotal - descuento;

    document.getElementById("pago").value = total;
}