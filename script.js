$(document).ready(function () {
    $("#min").click(function () {
        let num1 = Number($.trim($("#first").val()));
        let num2 = Number($.trim($("#second").val()));
        if (!checkNumber(num1, num2)[0]) {
            alert(`El número menor entre los números ingresados es: ${minNumber(num1, num2)}`);
        } else {
            alert(checkNumber(num1, num2)[1]);
        };
        clean();
    })

    $("#equal").click(function () {
        let num1 = Number($.trim($("#first").val()));
        let num2 = Number($.trim($("#second").val()));
        if (!checkNumber(num1, num2)[0]) {
            alert(equalNumber(num1, num2));
        } else {
            alert(checkNumber(num1, num2)[1]);
        };
        clean();
    })

    $("#invert").click(function () {
        let num1 = Number($.trim($("#first").val()));
        let num2 = Number($.trim($("#second").val()));
        if (!checkNumber(num1, num2)[0]) {
            alert([num1, num2] = [num2, num1]);
            $("#first").val(num1);
            $("#second").val(num2);
            // alert(invert(num1, num2));
        } else {
            alert(checkNumber(num1, num2)[1]);
        };
        // clean();
    })

    $("#addition").click(function () {
        let num1 = Number($.trim($("#first").val()));
        let num2 = Number($.trim($("#second").val()));
        if (!checkNumber(num1, num2)[0]) {
            alert(`El resultado de la suma es:  ${addition(num1, num2)}`);
        } else {
            alert(checkNumber(num1, num2)[1]);
        };
        clean();
    })
})

function minNumber(num1, num2) {
    return Math.min(num1, num2);
}

function equalNumber(num1, num2) {
    result = num1 / num2;
    switch (result) {
        case 1:
            return "Los números son iguales";
        default:
            return "Los números no son iguales";
    }
}

// function invert(num1, num2) {
//     return [num1, num2] = [num2, num1];
// }

function addition(num1, num2) {
    for (num2; num2 > 0; num2--) {
        num1++;
    }
    return num1;
}

function clean() {
    $("#first").val("");
    $("#second").val("");
}

function checkNumber(num1, num2) {
    if (!(isNaN(num1) && isNaN(num2))) {
        if (num1 > 0 && num2 > 0) {
            return [false];
        } else {
            return [true, "Por favor, ingrese un número positivo"];
        }
    } else {
        return [true, "Por favor, ingrese un número valido"];
    }
}