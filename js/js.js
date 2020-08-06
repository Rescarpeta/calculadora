var numero7 = document.getElementById("numero7");
var numero8 = document.getElementById("numero8");
var numero9 = document.getElementById("numero9");
var opesuma = document.getElementById("opesuma");

var numero4 = document.getElementById("numero4");
var numero5 = document.getElementById("numero5");
var numero6 = document.getElementById("numero6");
var operesta = document.getElementById("operesta");

var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var numero3 = document.getElementById("numero3");
var opemulti = document.getElementById("opemulti");

var ce = document.getElementById("ce");
var numero0 = document.getElementById("numero0");
var igual = document.getElementById("igual");
var opedivi = document.getElementById("opedivi");



function agregar1() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero1").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar2() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero2").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar3() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero2").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar4() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero5").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar5() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero5").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar6() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero6").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar7() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero7").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar8() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero8").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar9() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero9").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregar0() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("numero0").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregarsuma() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("opsuma").innerHTML;
    document.getElementById("calculo").innerHTML = x + " "+ y +" "
}
function agregarresta() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("opresta").innerHTML;
    document.getElementById("calculo").innerHTML = x + " " + y + " "
}
function agregarmulti() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("opmulti").innerHTML;
    document.getElementById("calculo").innerHTML = x + y;
}
function agregardivi() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("opdivi").innerHTML;
    document.getElementById("calculo").innerHTML = x +y;
}
function agregarigual() {
    let x = document.getElementById("calculo").innerHTML;
    let y = document.getElementById("igual").innerHTML;
    document.getElementById("calculo").innerHTML = x +y;
}
function impri() {
    let x = document.getElementById("calculo").innerHTML;
    let y = 40769405;
    document.getElementById("calculo").innerHTML = x +y;
}

function a(){
    let x = document.getElementById("calculo").innerHTML;
    let sumar = x.indexOf("+");
    let restar = x.indexOf("-");
    let multiplicar = x.indexOf("*");
    let dividir = x.indexOf("/");

    if(sumar!== -1){
        num1=x.split("+",2);
        p=num1[0]+num1[1];
        document.getElementById("calculo").innerHTML = p;


    }else if(restar!== -1){
        num1=x.split("-",2);
        p=num1[0]-num1[1];
        document.getElementById("calculo").innerHTML = p;


    }else if(multiplicar!== -1){
        num1=x.split("*",2);
        p=num1[0]*num1[1];
        document.getElementById("calculo").innerHTML = p;


    }else if(dividir!== -1){
        num1=x.split("/",2);
        p=num1[0]/num1[1];
        document.getElementById("calculo").innerHTML = p;


    }


}
