function seleccion() {
    if (event.target.value == 3) {
        var input = document.getElementById("value4");
        input.style.display = "none";
        input.value = "";
        var label = document.getElementById("label4");
        label.style.display = "none";
    }
    else {
        var input = document.getElementById("value4");
        input.style.display = "inline";
        input.value = "";
        var label = document.getElementById("label4");
        label.style.display = "inline";
    }
}

function validaNumericos() {
    var inputtxt = event.target;
    var valor = inputtxt.value;
    for (i = 0; i < valor.length; i++) {
        var code = valor.charCodeAt(i);
        if (code <= 47 || code >= 57) {
            inputtxt.value = "";
            alert('por favor ingresar números enteros positivos mayores a cero')
            return;
        }
    }

}

function calcular() {
    var lado1 = document.getElementById("value1").value;
    var lado2 = document.getElementById("value2").value;
    var lado3 = document.getElementById("value3").value;
    var lado4 = document.getElementById("value4").value;

    if (document.getElementById("lados").value == 3) {
        if (!lado1 || !lado2 || !lado3) {
            alert('Uno de los campos se encuentra vacio')
            return;
        }
        if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
            alert('por favor ingresar números enteros mayores a cero')
            return;
        }
        tresLados(lado1, lado2, lado3)
    } else {
        if (!lado1 || !lado2 || !lado3 || !lado4) {
            alert('Uno de los campos se encuentra vacio')
            return;
        }
        if (lado1 == 0 || lado2 == 0 || lado3 == 0 || lado4 == 0) {
            alert('por favor ingresar números enteros mayores a cero')
            return;
        }
        cuatroLados(lado1, lado2, lado3, lado4)
    }

}

function tresLados(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        alert('Es un triangulo Equilatero')
        return
    }
    if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        alert('Es un triangulo Isósceles')
        return
    }
    alert('Es un triangulo Escaleno')
    return
}

function cuatroLados(lado1, lado2, lado3, lado4) {
    if (lado1 == lado2 && lado2 == lado3 && lado3 == lado4) {
        alert('Es un Cuadrado')
        return
    }
    if (lado1 == lado3 && lado2 == lado4) {
        alert('Es un Rectángulo')
        return
    }
    alert('Es un Trapecio')

    return
}
