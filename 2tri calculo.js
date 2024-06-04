console.log(divisao(7, 3));
function divisao(V1, D2){
    let resultado = 0;
    resultado = V1 / D2
    return resultado
}

console.log(subtracao(7, 3));
function subtracao(V2, S2 ){
    let resultado = 0;
    resultado = V2 - S2
    return resultado
}

console.log(multiplicacao(7, 3));
function multiplicacao(V3, M2){
    let resultado = 0;
    resultado = V3 * M2
    return resultado
}

console.log(adicao(7, 3));
function adicao(V4, A2 ){
    let resultado = 0;
    resultado = V4 + A2
    return resultado
}

function print(mensagem){
    console.log(mensagem)
}
print(soma(20,33));
print("resultado:" + soma(8,18));
print(soma(multiplica(5,3),divide(30,soma(2,3))));
