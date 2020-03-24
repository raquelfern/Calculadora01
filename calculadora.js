function soma(){
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var soma = n1 + n2;
    window.alert(soma);
}

function subtracao(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var subtracao = n1 - n2;
    window.alert(`A subtração entre ${n1} e ${n2} é igual a ${subtracao}`);
}

function multiplicacao(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var multiplicacao = n1 * n2;
    window.alert(`A multiplicação entre ${n1} e ${n2} é igual a ${multiplicacao}`);
}

function divisao(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;
    var divisao = n1 / n2;
    window.alert(`A divisão entre ${n1} e ${n2} é igual a ${divisao}`);
}

function reset(){
    var reset = document.getElementById('limpar');
    var n1 = reset.n1;
    var n2 = reset.n2;

    n1.value = "";
    n2.value = "";
}