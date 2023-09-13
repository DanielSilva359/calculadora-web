document.addEventListener("DOMContentLoaded", function() {
var botoes = document.querySelectorAll(".btnDados");
var btnLimpa = document.getElementById("btnC");
var input = document.getElementById("inputId");
var btnSoma = document.getElementById("btnSoma");
var btnIgual = document.getElementById("btnIgual");
var btnDivide = document.getElementById("btnDivide");
var btnMultiiplica = document.getElementById("btnMultiplica");
var btnDiminui = document.getElementById("btnDiminui");
var operacoes = [];
var numeros = [];
var resultado = 0;

botoes.forEach(function(botao) {
    botao.addEventListener("click", function() {
        var textoDoBotao = botao.textContent;       
        input.value += textoDoBotao;
    });
});

btnLimpa.addEventListener("click", function(){
    input.value = "";
    operacoes = [];
    numeros = [];
});

btnSoma.addEventListener("click", function(){
    operacoes.push("+");
    numeros.push(parseFloat(input.value));
    input.value = "";
});

btnDivide.addEventListener("click", function(){
    operacoes.push("/");
    numeros.push(parseFloat(input.value));
    input.value = "";
});

btnMultiiplica.addEventListener("click", function(){
    operacoes.push("*");
    numeros.push(parseFloat(input.value));
    input.value = "";
});

btnDiminui.addEventListener("click", function(){
    operacoes.push("-");
    numeros.push(parseFloat(input.value));
    input.value = "";
});

btnIgual.addEventListener("click", function(){
    numeros.push(parseFloat(input.value));
    resultado = parseFloat(numeros[1]);
    console.log(numeros);
    console.log(operacoes);
    console.log("Esse eh  o valor do resultado: "+resultado);
    numeros.forEach(function(numero, indice){
        operacoes.forEach(function(operacao){
            if(indice > 0){
                switch(operacao){
                    case "+":
                        console.log("Passando pela soma"+numero);
                        resultado += numero;
                    break;
                    case "/":
                        console.log("Passando pela divisao"+numero);
                        resultado /= numero;
                    break;
                    case "*":
                        console.log("Passando pela multiplicacao"+numero);
                        resultado *= numero;
                    break;
                    case "-":
                        console.log("Passando pela subtracao"+numero);
                        resultado -= numero;
                    break;    
                }
            }
        });
    });
    input.value = resultado;
    numeros = [];
    operacoes = [];
});

});
